import { useNavigate } from "react-router-dom";

export const KioskStartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">DML</h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-lg shadow-md transition-all duration-200"
        onClick={() => navigate("/menu")}
      >
        시작하기
      </button>
    </div>
  );
};
