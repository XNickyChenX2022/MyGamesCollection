import { apiSlice } from "../apiSlice";

export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchGames: builder.mutation({
      query: (data) => ({
        url: "/api/search",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSearchGamesMutation } = searchApiSlice;
