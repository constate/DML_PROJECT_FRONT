import React from 'react';
import { useMenuCartStore } from '@/store/useMenuCartStore';

export const MenuItemCard = ({ menu }) => {
  const addToCart = useMenuCartStore((state) => state.addToCart);

  return (
    <div
      className="cursor-pointer gap-[12px] rounded-[8px] bg-[#f5f5f5] p-[10px_12px] transition hover:shadow-md"
      onClick={() => addToCart(menu, 1)}
    >
      <img
        src={menu.imageUrl}
        alt={menu.name}
        className="h-40 w-full rounded-[8px] object-cover"
      />
      <div className="pt-3">
        <h3 className="text-[16px] font-semibold text-[#3f3f3f]">
          {menu.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[14px] font-medium text-[#7c7c7c]">
          {menu.description}
        </p>
        <p className="mt-1 text-[14px] font-medium text-[#7c7c7c]">
          {menu.basePrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};
