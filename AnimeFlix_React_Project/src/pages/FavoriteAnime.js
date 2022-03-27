import { useContext } from "react";
import FavoriteContext from "../store/favorite-context";
import Videolist from "../componenets/layout/Videolist";

export default function FavoriteAnime() {
  const favoriteCtx = useContext(FavoriteContext);
  let content = "";
  if (favoriteCtx.favoriteCounts === 0) {
    content = <p>You have no favorites here.</p>;
  } else {
    content = <Videolist videos={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
}
