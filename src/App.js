import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/home.js";
import FavList from './Components/FavList/FavList.js';
import NavBar from './Components/Navbar/NavBar.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<FavList />}></Route>
      </Routes>
    <Footer/>
    </>
  );
}
export default App;