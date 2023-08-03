import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rating-app-backend.onrender.com/api/",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Games", "Friends", "FriendRequests"],
  endpoints: (builder) => ({}),
});
