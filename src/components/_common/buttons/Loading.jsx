// TODO: global css 들어오면 색상 변경
export const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-primary h-[50px] w-[50px] animate-spin rounded-full border-4 border-[#06402b] border-t-transparent"></div>
    </div>
  );
};
