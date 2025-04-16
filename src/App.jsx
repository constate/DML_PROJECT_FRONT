import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1 className="text-red-500 text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     </>
//   );
// }

// export default App;
