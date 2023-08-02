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
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import PrivateUserRoute from "./components/privateroutes/PrivateUserRoute";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import GamesScreen from "./screens/GamesScreen";
import PrivateRatingRoute from "./components/privateroutes/PrivateRatingRoute";
import ReviewScreen from "./screens/ReviewScreen";
import FriendScreen from "./screens/FriendScreen";
import FriendGamesScreen from "./screens/FriendGamesScreen";
import PrivateFriendRoutes from "./components/privateroutes/PrivateFriendRoutes";
import ErrorScreen from "./screens/ErrorScreen";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<ErrorScreen />} />
      <Route index={true} path="/" element={<AuthScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      {/* Private Routes */}
      <Route path="/" element={<PrivateUserRoute />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/games">
          <Route index={true} element={<GamesScreen />} />
          <Route path=":username" element={<PrivateRatingRoute />}>
            <Route path=":_id" element={<ReviewScreen />} />
          </Route>
        </Route>
        <Route path="/friends">
          <Route index={true} element={<FriendScreen />} />
          <Route path=":username" element={<PrivateFriendRoutes />}>
            <Route path="" element={<FriendGamesScreen />} />
          </Route>
        </Route>
      </Route>
    </Route>
  ),
  { basename: "/Rating-App-Frontend/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
