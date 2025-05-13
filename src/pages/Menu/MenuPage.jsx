import { Header } from '@/components/_common/Header';

import { useMenuCartStore } from '@/store/useMenuCartStore';
import { useState } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { CartPanel } from './CartPanel';

const menuData = [
  {
    categoryId: 1,
    categoryName: '커피',
    menus: [
      {
        id: 101,
        name: '아메리카노',
        basePrice: 3000,
        imageUrl: '/img/americano.png',
        soldOut: false,
        description: '고소하고 진한 맛',
        isOptionRequired: true,
        isSelectOptionRequired: false,
      },
      {
        id: 102,
        name: '라떼',
        basePrice: 3500,
        imageUrl: '/img/latte.png',
        soldOut: false,
        description: '우유와 함께 부드럽게',
        isOptionRequired: false,
        isSelectOptionRequired: false,
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: '스무디',
    menus: [
      {
        id: 201,
        name: '딸기 스무디',
        basePrice: 4500,
        imageUrl: '/img/strawberry_smoothie.png',
        soldOut: false,
        description: '상큼한 딸기 맛 그대로',
        isOptionRequired: true,
        isSelectOptionRequired: true,
      },
      {
        id: 202,
        name: '요거트 스무디',
        basePrice: 4800,
        imageUrl: '/img/yogurt_smoothie.png',
        soldOut: false,
        description: '요거트의 부드러운 조화',
        isOptionRequired: true,
        isSelectOptionRequired: true,
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: '음료',
    menus: [
      {
        id: 301,
        name: '청포도 에이드',
        basePrice: 4000,
        imageUrl: '/img/grape_ade.png',
        soldOut: false,
        description: '톡 쏘는 청포도 에이드',
        isOptionRequired: false,
        isSelectOptionRequired: false,
      },
      {
        id: 302,
        name: '코카콜라 (병)',
        basePrice: 2000,
        imageUrl: '/img/coke_bottle.png',
        soldOut: false,
        description: '시원한 병콜라',
        isOptionRequired: false,
        isSelectOptionRequired: false,
      },
    ],
  },
];
export const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const cartItems = useMenuCartStore((state) => state.cartItems);

  const categories = ['ALL', ...menuData.map((c) => c.categoryName)];
  const filteredMenus =
    selectedCategory === 'ALL'
      ? menuData.flatMap((c) => c.menus)
      : menuData.find((c) => c.categoryName === selectedCategory)?.menus || [];

  return (
    <div className="flex h-screen">
      {/* 좌측 메뉴 영역 */}
      <div className="flex flex-1 flex-col">
        <Header />
        {/* 카테고리 탭 */}
        <div className="flex overflow-x-auto border-b bg-gray-50 px-4 py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mr-2 rounded-full border px-4 py-2 ${
                selectedCategory === cat
                  ? 'bg-green-800 text-white'
                  : 'bg-white text-gray-700'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 메뉴 카드 영역 */}
        <div
          className={`grid gap-4 p-4 ${
            cartItems.length > 0
              ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
              : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6'
          }`}
        >
          {filteredMenus.map((menu) => (
            <MenuItemCard key={menu.id} menu={menu} />
          ))}
        </div>
      </div>

      {/* 우측 장바구니 패널 (있을 때만 표시) */}
      {cartItems.length > 0 && <CartPanel />}
    </div>
  );
};
