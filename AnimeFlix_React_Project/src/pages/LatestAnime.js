import { useHistory } from "react-router-dom";
import AddNewAnimeForm from "./AddNewAnimeForm";
export default function AddNewAnime() {
  const History = useHistory();
  function addVideoHandler(VideoObject) {
    fetch(
      "https://curious-chiller-321700-default-rtdb.firebaseio.com/Anime.json",
      {
        method: "POST",
        body: JSON.stringify(VideoObject),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      History.replace("/");
    });
  }
  return (
    <div>
      <h1>Add New Anime</h1>
      <AddNewAnimeForm AddVideoData={addVideoHandler} />;
    </div>
  );
}
