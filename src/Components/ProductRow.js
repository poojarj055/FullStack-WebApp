import React from 'react';

function ProductRow({ product, onDelete }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price.toFixed(2)}</td>
      <td>{product.description}</td>
      <td>
        <button
          className="Delete-button"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
