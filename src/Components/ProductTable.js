import React from 'react';
import ProductRow from './ProductRow.js';

function ProductTable({ data, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <ProductRow 
            key={product.id} 
            product={product} 
            onDelete={onDelete} 
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
