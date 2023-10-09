import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
});


