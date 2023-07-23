import { apiSlice } from "../apiSlice";

const BASE_URL = "/api/games";

export const gamesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => `${BASE_URL}`,
      providesTags: ["Games"],
    }),
    searchGames: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/search`,
        method: "POST",
        body: data,
      }),
    }),
    addGame: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: createdGame } = await queryFulfilled;
          dispatch(
            gamesApiSlice.util.updateQueryData(
              "getAllGames",
              undefined,
              (draft) => {
                draft?.push(createdGame);
              }
            )
          );
        } catch (error) {
          dispatch(gamesApiSlice.util.invalidateTags(["Games"]));
        }
      },
    }),
    removeGame: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}`,
        method: "DELETE",
        body: data,
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            gamesApiSlice.util.updateQueryData(
              "getAllGames",
              undefined,
              (draft) => {
                console.log(JSON.parse(JSON.stringify(draft)));
                return draft?.filter((games) => games?.game?._id !== args._id);
              }
            )
          );
        } catch (error) {
          console.log(error);
          dispatch(gamesApiSlice.util.invalidateTags(["Games"]));
        }
      },
    }),
  }),
});

export const {
  useSearchGamesMutation,
  useGetAllGamesQuery,
  useAddGameMutation,
  useRemoveGameMutation,
} = gamesApiSlice;
