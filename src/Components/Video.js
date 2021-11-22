import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import YouTube from "react-youtube";
import "../styles/Video.css";

const Video = () => {
  const { id } = useParams();
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <div className="video_container">
        <div className="video_display">
          <YouTube className="video_frame" videoId={id} />
        </div>
      </div>
      <div className="button_container">
        <button className="go_back_button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Video;
