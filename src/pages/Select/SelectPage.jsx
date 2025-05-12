// 먹고가기, 포장하기 선택 페이지
import { useKioskStore } from '@/store/useKioskStore';
import { useNavigate } from 'react-router-dom';

export const SelectPage = () => {
  const navigate = useNavigate();
  const setOrderType = useKioskStore((state) => state.setOrderType);

  // 처음으로
  const reset = useKioskStore((state) => state.reset);

  const handleSelect = (type) => {
    setOrderType(type);
    navigate('/menu');
  };

  const handleReset = () => {
    reset(); // 상태 초기화
    navigate('/kiosk'); // 시작하기로 이동
  };
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-white px-4">
      {/* 상단 처음으로 버튼 */}
      <button
        onClick={handleReset}
        className="absolute top-4 left-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100"
      >
        처음으로
      </button>

      <h1 className="mb-12 text-center text-3xl font-bold text-gray-800">
        이용 방식을 선택해주세요
      </h1>

      <div className="flex w-full max-w-md flex-col gap-6 md:flex-row">
        <button
          onClick={() => handleSelect('eat-in')}
          className="w-full rounded-xl bg-[#0a5f40] py-6 text-xl font-semibold text-white shadow transition-all duration-200 hover:bg-[#032818]"
        >
          매장 이용
        </button>
        <button
          onClick={() => handleSelect('take-out')}
          className="w-full rounded-xl bg-[#b2bec3] py-6 text-xl font-semibold text-white shadow transition-all duration-200 hover:bg-[#2d3436]"
        >
          포장하기
        </button>
      </div>
    </div>
  );
};
