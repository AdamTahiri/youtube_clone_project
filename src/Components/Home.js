import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoList from "./VideoList";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [videosArray, setVideosArray] = useState([]);
  const [showVideos, setShowVideos] = useState(false);

  const fetchYoutubeVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=12&key=${process.env.REACT_APP_API_KEY}&q=${input}`
      );
      setVideosArray(res.data.items);
      debugger;
    } catch (error) {
      console.log(error);
      setVideosArray([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchYoutubeVideos();
    setShowVideos(true);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Search"
        />
        <button className="button">
          <SearchIcon />
        </button>
      </form>
      <VideoList videosArray={videosArray} />
    </section>
  );
};

export default Home;
