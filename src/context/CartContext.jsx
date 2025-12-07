import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza, size) => {
    const existingItem = cart.find(item => item.id === pizza.id && item.size === size);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === pizza.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        ...pizza,
        size,
        price: pizza.sizes[size],
        quantity: 1
      }]);
    }
  };

  const updateQuantity = (id, size, change) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const getItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
