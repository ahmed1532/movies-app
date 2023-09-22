
import './App.css';
import './index.css';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import ContextProvider from './components/context/GlobalContext';

import { BrowserRouter , Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
      <Header />
      <Routes>
          <Route path="/" element={<Watchlist />}/>
          <Route path="/Watched" element={<Watched />} />
          <Route path="/Add" element={<Add />} />
        
      </Routes>
    </ContextProvider>
  
  </BrowserRouter>
  );
}

export default App;
