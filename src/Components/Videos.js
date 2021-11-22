import axios from "axios";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import VideoList from "../components/VideoList";
import { useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";

const randURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=us&key=${process.env.REACT_APP_API_KEY}`;
const searchURL = `https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=12&key=${process.env.REACT_APP_API_KEY}`;
const Videos = (props) => {
  const [videosArray, setVideosArray] = useState([]);
  const { search } = useLocation()

  const fetchVideos = async () => {
    const URL = search
      ? searchURL + "&q=" + search.slice(8)
      : randURL;
    try {
      const res = await axios.get(URL);
      setVideosArray(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos()
  }, [search]);

  const maxLength = 250;

  return (
    <div>
      <ul className="video_ul">
        {videosArray.map((video) => {
          return (
            <li key={video.id}>
              <Link to={`/videos/${video.id}`}>
                {" "}
                <div className="thumbnail_container">
                  <figure className="video_img">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt="videoThumbnail"
                    />
                  </figure>
                  <div className="title_description">
                    <div className="title">
                      {video.snippet.title} <br />
                    </div>
                    {`${video.snippet.description.substring(0,maxLength)}...`}
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

export default Videos;
