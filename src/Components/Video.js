import React from "react";
import { useParams, Link } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  return (
    <div>
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
      <Link to="/youtube">Go Back</Link>
    </div>
  );
};

export default Video;
