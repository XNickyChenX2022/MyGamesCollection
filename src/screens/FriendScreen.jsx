import FriendInbox from "../components/friends/friendinbox/FriendInbox";
import FriendSearch from "../components/friends/friendsearch/FriendSearch";
import FriendList from "../components/friends/friendlist/FriendList";
import ScreenContainer from "../components/containers/ScreenContainer";
const FriendScreen = () => {
  return (
    <ScreenContainer>
      <FriendSearch />
      <div className="md:flex md:justify-between md:flex-1">
        <FriendInbox />
        <FriendList />
      </div>
    </ScreenContainer>
  );
};

export default FriendScreen;
