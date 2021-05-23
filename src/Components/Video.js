import React from "react";
import { useParams, Link } from "react-router-dom";
import YouTube from 'react-youtube';
import "./Video.css"

const Video = () => {
  const { id } = useParams();
  return (
    <div className="video_container">
      {/* <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe> */}
      <YouTube videoId={id} />
      <Link className="go_back_button" to="/youtube">Go Back</Link>
    </div>
  );
};

export default Video;
