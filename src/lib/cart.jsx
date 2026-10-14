import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);

  const add = useCallback((product, qty = 1) => {
    setLines((prev) => {
      const found = prev.find((l) => l.slug === product.slug);
      if (found) return prev.map((l) => (l.slug === product.slug ? { ...l, qty: l.qty + qty } : l));
      return [...prev, { slug: product.slug, name: product.name, image: product.image, priceValue: product.priceValue, price: product.price, qty }];
    });
  }, []);

  const remove = useCallback((slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)), []);
  const setQty = useCallback((slug, qty) => {
    setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l)));
  }, []);
  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => n + (l.priceValue || 0) * l.qty, 0);
    return { lines, add, remove, setQty, clear, count, total };
  }, [lines, add, remove, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
