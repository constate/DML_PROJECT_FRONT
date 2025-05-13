import { create } from 'zustand';

export const useMenuCartStore = create((set) => ({
  cartItems: [],

  addToCart: (menu, count) =>
    set((state) => {
      const exists = state.cartItems.find((item) => item.id === menu.id);
      if (exists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === menu.id ? { ...item, count: item.count + count } : item,
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...menu, count }],
      };
    }),

  updateItemCount: (id, newCount) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(1, newCount) } : item,
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
}));
