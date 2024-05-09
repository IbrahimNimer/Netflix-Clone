import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/home.js";
import MovieList from "./Components/MovieList/MoiveList.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<MovieList />}></Route>
      </Routes>
    </>
  );
}
export default App;