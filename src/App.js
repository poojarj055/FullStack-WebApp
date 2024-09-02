import './App.css';
import React, { useEffect, useState } from 'react';
import ProductTable from './Components/ProductTable';
import AddProductForm from './Components/AddProductForm';

function App() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/vendors/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddProduct = (newProduct) => {
    fetch('http://localhost:8080/vendors/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(product => setData(prevData => [...prevData, product]))
      .catch(error => console.error('Error:', error));
  };

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:8080/vendors/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setData(prevData => prevData.filter(item => item.id !== id));
        } else {
          console.error('Error deleting item');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <button
          className="Product-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Product'}
        </button>
        {showForm && <AddProductForm onAddProduct={handleAddProduct} />}
        <ProductTable data={data} onDelete={handleDeleteProduct} />
      </header>
    </div>
  );
}

export default App;
