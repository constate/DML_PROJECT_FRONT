import { useMenuCartStore } from '@/store/useMenuCartStore';

export const CartPanel = () => {
  const { cartItems, updateItemCount, removeItem } = useMenuCartStore();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.basePrice * item.count,
    0,
  );

  return (
    <aside className="flex h-full w-full flex-col border-l bg-white sm:w-[340px]">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-bold">장바구니</h2>
        <span className="text-sm text-gray-600">총 {cartItems.length}개</span>
      </div>
      <div className="flex-1 space-y-4 overflow-auto px-4 py-2">
        {cartItems.map((item) => (
          <div key={item.id} className="relative rounded border p-3 shadow-sm">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => removeItem(item.id)}
            >
              ✕
            </button>
            <div className="text-sm font-semibold text-gray-800">
              {item.name}
            </div>
            <div className="mt-1 text-xs text-gray-500">{item.description}</div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateItemCount(item.id, item.count - 1)}
                  disabled={item.count === 1}
                  className="rounded border px-2"
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() => updateItemCount(item.id, item.count + 1)}
                  className="rounded border px-2"
                >
                  +
                </button>
              </div>
              <div className="text-sm font-semibold">
                {(item.basePrice * item.count).toLocaleString()}원
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex justify-between font-semibold">
          <span>합계</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
        <button className="mt-4 w-full rounded-lg bg-green-700 py-3 font-bold text-white hover:bg-green-800">
          주문하기
        </button>
      </div>
    </aside>
  );
};
// import { useMenuCartStore } from '@/store/useMenuCartStore';

// export const CartPanel = () => {
//   const { cartItems, updateItemCount, removeItem } = useMenuCartStore();
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.basePrice * item.count,
//     0,
//   );

//   return (
//     <aside className="flex h-full w-full flex-col border-l bg-white sm:w-[340px]">
//       <div className="flex items-center justify-between border-b p-4">
//         <h2 className="text-lg font-bold">장바구니</h2>
//         <span className="text-sm text-gray-600">총 {cartItems.length}개</span>
//       </div>
//       <div className="flex-1 space-y-4 overflow-auto px-4 py-2">
//         {cartItems.map((item) => (
//           <div key={item.id} className="relative rounded border p-3 shadow-sm">
//             <button
//               className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
//               onClick={() => removeItem(item.id)}
//             >
//               ✕
//             </button>
//             <div className="text-sm font-semibold text-gray-800">
//               {item.name}
//             </div>
//             <div className="mt-1 text-xs text-gray-500">{item.description}</div>
//             <div className="mt-2 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => updateItemCount(item.id, item.count - 1)}
//                   disabled={item.count === 1}
//                   className="rounded border px-2"
//                 >
//                   -
//                 </button>
//                 <span>{item.count}</span>
//                 <button
//                   onClick={() => updateItemCount(item.id, item.count + 1)}
//                   className="rounded border px-2"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="text-sm font-semibold">
//                 {(item.basePrice * item.count).toLocaleString()}원
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="border-t p-4">
//         <div className="flex justify-between font-semibold">
//           <span>합계</span>
//           <span>{totalPrice.toLocaleString()}원</span>
//         </div>
//         <button className="mt-4 w-full rounded-lg bg-green-700 py-3 font-bold text-white hover:bg-green-800">
//           주문하기
//         </button>
//       </div>
//     </aside>
//   );
// };
