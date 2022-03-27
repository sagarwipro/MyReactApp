import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorite-context";
import classes from "./MainNavBar.module.css";

export default function MainNavBar() {
  const FavoriteCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>AnimeFlix</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LatestAnime">Latest Anime</Link>
          </li>
          <li>
            <Link to="/FavoriteAnime">
              Favorite Anime{" "}
              <span className={classes.badge}>
                {FavoriteCtx.favoriteCounts}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
