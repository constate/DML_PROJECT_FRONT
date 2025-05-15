import { useNavigate } from 'react-router-dom';
import { useMenuCartStore } from '@/store/useMenuCartStore';

export const Header = () => {
  const navigate = useNavigate();
  const cartCount = useMenuCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.count, 0),
  );

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b-[1px] border-[#f5f5f5] bg-white px-4 py-[10px]">
      <button
        onClick={() => navigate('/kiosk')}
        className="text-sm text-gray-700 hover:text-gray-900"
      >
        처음으로
      </button>

      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-700 hover:text-gray-900">
          직원 호출
        </button>
        <button className="text-sm text-gray-700 hover:text-gray-900">
          언어
        </button>

        <div className="relative">
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 min-w-[18px] rounded-full bg-red-500 px-[6px] py-[2px] text-center text-[11px] font-medium text-white">
              {cartCount}
            </span>
          )}
          <button className="text-xl">🛒</button>
        </div>
      </div>
    </header>
  );
};
