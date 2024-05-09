import React, { useEffect, useState } from "react";
import MovieList from '../MovieList/MoiveList';
import './home.css'; 

function Home() {
  const [trendingArr, setTrendingArr] = useState([]);

  const sendReq = async () => {
    const serverURL = `https://api.themoviedb.org/3/trending/all/week?api_key=d5769682f1f3765c55a605595ef6730d`;
    const res = await fetch(serverURL);
    const jsonRes = await res.json();
    setTrendingArr(jsonRes.results);
  }

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <div className="home-container"> 
      <h1>Trending Movies</h1>
      <MovieList trendingArr={trendingArr} />
    </div>
  );
}

export default Home;
