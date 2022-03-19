import './App.css';
import { Route, Routes} from "react-router-dom";
import BurgerMenu from './Components/Burger/BurgerMenu';
import StoreSales from './Components/storesales';
import Liveboard from './Components/liveboard'
import FullApp from './Components/fullapp';
import About from './Components/about';

//ThoughtSpot
import {
  AuthType,
  init, 
  Page,
} from "@thoughtspot/visual-embed-sdk";

const TSURL = "https://try.thoughtspot.cloud";

function App() { 

  init({
    thoughtSpotHost: TSURL,
    authType: AuthType.None
  });

 return ( 
   <div className="App">
     <header>
       <BurgerMenu />
     </header>

     <Routes>
       <Route path="/" element={<h1>Home</h1>} />
       <Route path="/storesales" element={<StoreSales />} />
       <Route path="/liveboard" element={<Liveboard />} />
       <Route path="/fullapp" element={<FullApp />} />
       <Route path="/about" element={<About />} />
     </Routes>

   </div>
 );
}
export default App;