import VideoCard from "./VideoCard";

export default function Videolist(props) {
  return (
    <div>
      {props.videos.map((videoData) => (
        <VideoCard
          key={videoData.id}
          id={videoData.id}
          imageLink={videoData.imageLink}
          title={videoData.title}
        />
      ))}
    </div>
  );
}
