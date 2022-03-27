import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import FavoriteAnime from "./pages/FavoriteAnime";
import AddNewAnime from "./pages/LatestAnime";
import Layout from "./componenets/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/FavoriteAnime/">
          <FavoriteAnime />
        </Route>
        <Route path="/LatestAnime">
          <AddNewAnime />
        </Route>
      </Switch>
    </Layout>
  );
}
