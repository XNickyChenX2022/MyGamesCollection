import { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#121212] w-screen bg-center bg-fixed flex flex-col h-full min-h-screen">
      <Header />
      <ToastContainer />
      {/* <div className="container m-auto"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
}

export default App;
