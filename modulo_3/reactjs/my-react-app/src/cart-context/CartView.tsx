import React, { useContext } from 'react';
import { CartContext, type CartItem,  } from './CartContext';

const CartView: React.FC = () => {
  const { items, addItem, removeItem } = useContext(CartContext);

  const handleAddItem = () => {
    const newItem: CartItem = {
      id: Date.now().toString(),
      name: 'Nuevo producto',
      price: 0,
      quantity: 1,
    };

    addItem(newItem);
  };

  return (
    <div>
      <h2>Carrito</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddItem}>
        Agregar producto
      </button>
    </div>
  );
};

export default CartView;
