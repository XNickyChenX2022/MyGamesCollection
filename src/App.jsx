import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="bg-[#121212] w-screen bg-center bg-fixed h-full min-h-screen flex flex-col">
      <Header />
      <ToastContainer />
      <div
        className={`w-screen overflow-x-hidden overflow-y-auto min-w-full container mx-auto flex flex-grow md:static justify-center ${
          userInfo ? "" : "absolute bottom-0 md:static"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
