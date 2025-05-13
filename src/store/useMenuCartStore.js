import { create } from 'zustand';

export const useMenuCartStore = create((set) => ({
  selectedMenu: null,
  cartItems: [],

  openDrawer: (menu) => set({ selectedMenu: menu }),
  closeDrawer: () => set({ selectedMenu: null }),

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
}));
