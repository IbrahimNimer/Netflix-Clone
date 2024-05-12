import React, { useEffect, useState } from "react";
import MovieList from '../MovieList/MoiveList';
import './home.css'; 


function Home() {
  const [trendingArr, setTrendingArr] = useState([]);

  const sendReq = async () => {
    const apiUrl=process.env.REACT_APP_API_KEY;
    const serverURL = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiUrl}`;
    const res = await fetch(serverURL);
    const jsonRes = await res.json();
    setTrendingArr(jsonRes.results);
  }

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <div className="home-container"> 
      <MovieList trendingArr={trendingArr} />
    </div>
  );
}

export default Home;
