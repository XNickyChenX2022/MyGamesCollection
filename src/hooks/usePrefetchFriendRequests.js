import { usePrefetch } from "../slices/friendsApiSlice";

const usePrefetchFriendRequests = () => {
  const PrefetchFriendRequests = usePrefetch("getFriendRequests");
  PrefetchFriendRequests();
};

export default usePrefetchFriendRequests;
