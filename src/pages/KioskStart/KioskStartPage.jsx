import { useNavigate } from 'react-router-dom';

export const KioskStartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="mb-8 text-3xl font-extrabold text-gray-900">DML</h1>
      <button
        className="rounded-lg bg-[#06402b] px-8 py-4 text-xl text-white shadow-md transition-all duration-200 hover:bg-[#032818]"
        onClick={() => navigate('/select')}
      >
        시작하기
      </button>
    </div>
  );
};
