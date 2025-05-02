import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useKioskStore = create(
  persist(
    (set) => ({
      orderType: null,
      menuItems: [],
      paymentInfo: null,

      setOrderType: (type) => set({ orderType: type }),
      setMenuItems: (items) => set({ menuItems: items }),
      setPaymentInfo: (info) => set({ paymentInfo: info }),

      reset: () =>
        set({
          orderType: null,
          menuItems: [],
          paymentInfo: null,
        }),
    }),
    {
      name: 'kiosk-session-storage', // 브라우저 저장소에 저장되는 key 이름
      getStorage: () => sessionStorage, // 탭 종료 시 초기화됨
      // // 만약 상태를 계속 유지하고 싶다면
      // getStorage: () => localStorage,
    },
  ),
);
