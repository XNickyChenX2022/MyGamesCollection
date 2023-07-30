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
import PrivateUserRoute from "./components/Private Routes/PrivateUserRoute";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import GamesScreen from "./screens/GamesScreen";
import PrivateRatingRoute from "./components/Private Routes/PrivateRatingRoute";
import ReviewScreen from "./screens/ReviewScreen";
import FriendScreen from "./screens/FriendScreen";
import FriendGamesScreen from "./screens/FriendGamesScreen";
import PrivateFriendRoutes from "./components/private routes/PrivateFriendRoutes";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route exact strict path="login" element={<LoginScreen />} />
      <Route exact strict path="register" element={<RegisterScreen />} />
      {/* Private Routes */}

      <Route path="/" element={<PrivateUserRoute />}>
        <Route exact strict path="/profile" element={<ProfileScreen />} />
        <Route exact strict path="/search" element={<SearchScreen />} />
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
      {/* <Route path="/games/:username" element={<PrivateRatingRoute />}>
        <Route exact strict path=":_id" element={<ReviewScreen />}></Route>
      </Route> */}
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
