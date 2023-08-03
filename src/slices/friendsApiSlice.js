import { apiSlice } from "./apiSlice";

export const friendsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => "/friends",
      providesTags: ["Friends"],
    }),
    getFriendRequests: builder.query({
      query: () => "/friends/requests",
      providesTags: ["FriendRequests"],
    }),
    getFriendGames: builder.query({
      query: (username) => `/friends/${username}`,
    }),
    sendFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/friends",
        method: "POST",
        body: data,
      }),
    }),
    respondFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/friends/respond",
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

