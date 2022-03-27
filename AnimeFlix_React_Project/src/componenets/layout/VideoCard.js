import { useContext } from "react";
import "../../styles.css";
import FavoriteContext from "../../store/favorite-context";
import { useState } from "react";

export default function VideoCard(video) {
  const favoriteCtx = useContext(FavoriteContext);

  const isFavorite = favoriteCtx.animeIsFavorite(video.id);
  function toggleFavStatusHandler() {
    if (isFavorite) {
      favoriteCtx.removeFavorite(video.id);
    } else {
      favoriteCtx.addFavorite({
        id: video.id,
        imageLink: video.imageLink,
        title: video.title
      });
    }
  }

  return (
    <div>
      <div className="videoCardSize position-left">
        <img
          className="videoCardSize"
          src={video.imageLink}
          alt="cover"
          position="relative"
        />
        <h3 className="videoTitle">{(video.title, video.options)}</h3>
        <button className="sign-button" onClick={toggleFavStatusHandler}>
          {isFavorite ? "Remove" : "Favorite"}
        </button>
      </div>
    </div>
  );
}
