import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
const FavoriteContext = createContext({
  favorites: [],
  favoriteCounts: 0
});

export function FavoriteContextSender(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteAnime(favoriteAnime) {
    setUserFavorites((prevFavoritesAnime) => {
      return prevFavoritesAnime.concat(favoriteAnime);
    });
  }

  function removeFavoriteAnime(animeId) {
    setUserFavorites((prevFavoritesAnime) => {
      return prevFavoritesAnime.filter((anime) => anime.id !== animeId);
    });
  }

  function isItFavoriteAnime(animeId) {
    return userFavorites.some((anime) => anime.id === animeId);
  }

  const context = {
    favorites: userFavorites,
    favoriteCounts: userFavorites.length,
    addFavorite: addFavoriteAnime,
    removeFavorite: removeFavoriteAnime,
    animeIsFavorite: isItFavoriteAnime
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
