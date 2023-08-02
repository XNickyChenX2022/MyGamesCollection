import { usePrefetch } from "../slices/gamesApiSlice";

const usePrefetchGames = () => {
  const PrefetchGames = usePrefetch("getAllGames");
  PrefetchGames();
};

export default usePrefetchGames;
