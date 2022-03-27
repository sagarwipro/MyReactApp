import classes from "../componenets/layout/form.module.css";
import { useRef } from "react";

export default function AddNewAnimeForm(props) {
  const titleRef = useRef();
  const imageLinkRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const inputTitle = titleRef.current.value;
    const inputImageLink = imageLinkRef.current.value;

    const VideoObject = { title: inputTitle, imageLink: inputImageLink };

    props.AddVideoData(VideoObject);
  }

  return (
    <div className={classes.formCard} onSubmit={submitHandler}>
      <form>
        <div className={classes.control}>
          <label htmlFor="title">Anime Title</label>
          <input
            className={classes.titleBox}
            type="text"
            required
            id="title"
            ref={titleRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="imageLink">Anime Link</label>
          <input
            className={classes.titleBox}
            type="url"
            required
            id="imageLink"
            ref={imageLinkRef}
          />
        </div>
        <div>
          <button className={classes.actions}>Add Video Card</button>
        </div>
      </form>
    </div>
  );
}
