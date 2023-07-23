import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="bg-[#121212] w-screen bg-center bg-fixed h-full min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <ToastContainer />
      <div
        className={`container mx-auto flex flex-grow md:static overflow-x-hidden ${
          userInfo ? "" : "absolute bottom-0 md:static"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
