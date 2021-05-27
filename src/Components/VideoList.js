import React from "react";
import { Link } from "react-router-dom";

const VideoList = (props) => {
  debugger;
  return (
    <div>
      <ul className="video_ul">
        {props.videosArray.map((video) => {
          return (
            <li key={video.id.videoId}>
              <Link to={`/videos/:id`}>
                {" "}
                <div className="thumbnail_container">
                  <figure className="video_img">
                    <img src={video.snippet.thumbnails.high.url} />
                  </figure>
                  <div className="title_description">
                    <div className="title">
                      {video.snippet.title} <br />
                    </div>
                    {video.snippet.description}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
