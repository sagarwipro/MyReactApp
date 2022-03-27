import "../styles.css";
import { useEffect, useState } from "react";
import Videolist from "../componenets/layout/Videolist";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAnime, setLoadedAnime] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://curious-chiller-321700-default-rtdb.firebaseio.com/Anime.json/"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allAnime = [];

        for (const key in data) {
          const anime = {
            id: key,
            ...data[key]
          };
          allAnime.push(anime);
        }

        setIsLoading(false);
        setLoadedAnime(allAnime);
      });
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return <Videolist videos={loadedAnime} />;
}
