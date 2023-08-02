import { apiSlice } from "./apiSlice";
const BASE_URL = "https://rating-app-backend.onrender.com/api/friends";
export const friendsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => `${BASE_URL}`,
      providesTags: ["Friends"],
    }),
    getFriendRequests: builder.query({
      query: () => `${BASE_URL}/requests`,
      providesTags: ["FriendRequests"],
    }),
    getFriendGames: builder.query({
      query: (username) => `${BASE_URL}/${username}`,
    }),
    sendFriendRequest: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    respondFriendRequest: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/respond`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data: response } = await queryFulfilled;
          if (args.response === true) {
            dispatch(
              friendsApiSlice.util.updateQueryData(
                "getFriends",
                undefined,
                (draft) => {
                  draft?.push(response);
                }
              )
            );
          }
          dispatch(
            friendsApiSlice.util.updateQueryData(
              "getFriendRequests",
              undefined,
              (draft) => {
                return draft.filter(
                  (friendRequest) =>
                    friendRequest.sender.username != args.senderUsername
                );
              }
            )
          );
        } catch (err) {
          console.log(err);
          dispatch(friendsApiSlice.util.invalidateTags(["Friends"]));
        }
      },
    }),
  }),
});

export const {
  useGetFriendsQuery,
  useGetFriendRequestsQuery,
  useGetFriendGamesQuery,
  useSendFriendRequestMutation,
  useRespondFriendRequestMutation,
  usePrefetch,
} = friendsApiSlice;

