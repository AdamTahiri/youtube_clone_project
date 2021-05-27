import React from "react";
import { useParams, Link } from "react-router-dom";
import YouTube from 'react-youtube';
import "./Video.css"

const Video = () => {
  const { id } = useParams();
  return (
    <div className="video_container">
      <YouTube videoId={id} />
      <Link className="go_back_button" to="/">Go Back</Link>
    </div>
  );
};

export default Video;
