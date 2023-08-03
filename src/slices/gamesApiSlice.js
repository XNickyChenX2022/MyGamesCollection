import { apiSlice } from "./apiSlice";

export const gamesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => "/games",
      providesTags: ["Games"],
    }),
    searchGames: builder.mutation({
      query: (data) => ({
        url: "/games/search",
        method: "POST",
        body: data,
      }),
    }),
    addGame: builder.mutation({
      query: (data) => ({
        url: "/games",
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
        url: "/games",
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
    rateGame: builder.mutation({
      query: (data) => ({
        url: "/games/rate",
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: rating } = await queryFulfilled;
          dispatch(
            gamesApiSlice.util.updateQueryData(
              "getAllGames",
              undefined,
              (draft) => {
                let gameReview = draft?.find(
                  (draftItem) => draftItem?._id === args?._id
                );
                gameReview.rating = rating;
              }
            )
          );
        } catch (error) {
          console.log(error);
          dispatch(gamesApiSlice.util.invalidateTags(["Games"]));
        }
      },
    }),
    reviewGame: builder.mutation({
      query: (data) => ({
        url: "/games/review",
        method: "PUT",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: newReview } = await queryFulfilled;
          dispatch(
            gamesApiSlice.util.updateQueryData(
              "getAllGames",
              undefined,
              (draft) => {
                let gameReview = draft?.find(
                  (draftItem) => draftItem?._id === args?._id
                );
                gameReview.review = newReview;
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
  useRateGameMutation,
  useReviewGameMutation,
  usePrefetch,
} = gamesApiSlice;
