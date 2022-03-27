import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavoriteContextSender } from "./store/favorite-context";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <FavoriteContextSender>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextSender>,
  rootElement
);
