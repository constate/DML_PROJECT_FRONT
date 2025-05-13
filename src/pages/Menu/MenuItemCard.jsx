import React from 'react';
import { useMenuCartStore } from '@/store/useMenuCartStore';

export const MenuItemCard = ({ menu }) => {
  const addToCart = useMenuCartStore((state) => state.addToCart);

  return (
    <div
      className="cursor-pointer rounded-xl border bg-white transition hover:shadow-md"
      onClick={() => addToCart(menu, 1)}
    >
      <img
        src={menu.imageUrl}
        alt={menu.name}
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{menu.name}</h3>
        <p className="line-clamp-2 text-sm text-gray-500">{menu.description}</p>
        <p className="mt-2 font-bold text-gray-900">
          {menu.basePrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};
