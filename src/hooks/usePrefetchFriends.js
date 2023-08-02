import { usePrefetch } from "../slices/friendsApiSlice";

const usePrefetchFriends = () => {
  const PrefetchFriends = usePrefetch("getFriends");
  PrefetchFriends();
};

export default usePrefetchFriends;
