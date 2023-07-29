import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Playlist from "./pages/Playlist";
import WatchLater from './pages/WatchLater';
import ListingPage from './pages/ListingPage';
import SinglePage from './pages/SinglePage';


function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='/watch' element={<WatchLater/>}/>
        <Route path='/:category' element={<ListingPage/>}/>
        <Route path='/category/:id' element={<SinglePage/>}/>        
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
