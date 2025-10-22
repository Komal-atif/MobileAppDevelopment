// context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in cart (same id & size)
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
      );

      if (existingIndex >= 0) {
        // If exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += 1;
        return updatedItems;
      } else {
        // Else, add new item with quantity = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === product.id && item.selectedSize === product.selectedSize)
      )
    );
  };

  const updateQuantity = (product, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === product.id && item.selectedSize === product.selectedSize) {
          const newQty = item.quantity + change;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
