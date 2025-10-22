
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (product) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
  };

  const isInWishlist = (product) => {
    return wishlistItems.some(item => item.id === product.id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
