import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [input, setInput] = useState("");
    const [videosArray, setVideosArray] = useState([]);
    const [showVideos, setShowVideos] = useState(false);

    const fetchYoutubeVideos = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search/?part=snippet&maxResults=12&key=${process.env.REACT_APP_API_KEY }&q=${input}`);
            setVideosArray(res.data.items)
            debugger
        } catch (error) {
            console.log(error);
            setVideosArray([])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchYoutubeVideos();
        setShowVideos(true)
        setInput("")
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const toggleVideos = () => {
        setShowVideos(!showVideos);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={input} placeholder="search"/>
            <button>Search</button>
            </form>
            {showVideos ? 
            <ul>
            {videosArray.map((video) => {
                return <li key={video.id.videoId}> <img src={video.snippet.thumbnails.default.url}/><b>{video.snippet.title}</b> <br/>{video.snippet.description}</li>
            })}
            </ul> : "No Videos" 
            }
        </section>
    )
}

export default Home
