import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, description, price: parseFloat(price) };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input 
          type="text" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input 
          type="number" 
          step="0.01" 
          value={price} 
          onChange={e => setPrice(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="Product-button">Add Product</button>
    </form>
  );
}

export default AddProductForm;
