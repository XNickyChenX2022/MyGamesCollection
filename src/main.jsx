import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import GamesScreen from "./screens/GamesScreen";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route exact strict path="/login" element={<LoginScreen />} />
      <Route exact strict path="/register" element={<RegisterScreen />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route exact strict path="/profile" element={<ProfileScreen />} />
        <Route exact strict path="/search" element={<SearchScreen />} />
        <Route exact strict path="/games" element={<GamesScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
