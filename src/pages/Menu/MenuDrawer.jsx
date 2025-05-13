import React, { useState } from 'react';
import { useMenuCartStore } from '@/store/useMenuCartStore';

export const MenuDrawer = () => {
  const { selectedMenu, closeDrawer, addToCart } = useMenuCartStore();
  const [count, setCount] = useState(1);

  if (!selectedMenu) return null;

  const totalPrice = selectedMenu.basePrice * count;

  return (
    <aside className="fixed top-0 right-0 z-50 flex h-full w-full flex-col border-l bg-white shadow-lg sm:w-[400px]">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-lg font-bold">{selectedMenu.name}</h2>
        <button onClick={closeDrawer} className="text-gray-500">
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <img
          src={selectedMenu.imageUrl}
          alt={selectedMenu.name}
          className="h-48 w-full rounded object-cover"
        />
        <p className="mt-4 text-sm text-gray-600">{selectedMenu.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-600">수량</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
              className="px-2 text-lg"
            >
              -
            </button>
            <span className="w-6 text-center text-lg font-medium">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-2 text-lg"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-6 text-right text-lg font-semibold">
          합계: {totalPrice.toLocaleString()}원
        </div>
      </div>
      <div className="border-t px-4 py-3">
        <button
          onClick={() => {
            addToCart(selectedMenu, count);
            closeDrawer();
          }}
          className="w-full rounded-lg bg-[#0a5f40] py-3 font-bold text-white transition hover:bg-[#06402b]"
        >
          장바구니에 담기
        </button>
      </div>
    </aside>
  );
};
