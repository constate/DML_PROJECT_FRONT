import { useNavigate } from 'react-router-dom';
import { useMenuCartStore } from '@/store/useMenuCartStore';

export const Header = () => {
  const navigate = useNavigate();
  const cartCount = useMenuCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.count, 0),
  );

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-4 py-3">
      <button
        onClick={() => navigate('/kiosk')}
        className="text-sm text-gray-700"
      >
        처음으로
      </button>
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-700">직원 호출</button>
        <button className="text-sm text-gray-700">언어</button>
        <div className="relative">
          <span className="absolute -top-2 -right-2 rounded-full bg-red-500 px-1 text-xs text-white">
            {cartCount}
          </span>
          <button className="text-sm">🛒</button>
        </div>
      </div>
    </header>
  );
};
