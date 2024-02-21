import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Style/App.css';
import Header from './Views/Header';
import Menu from './Views/Menu';
import MoreItems from './Views/MoreItems';
import Contact from './Views/Contact';

function App() {
  return (
    //Render all components
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/more-items" element={<MoreItems />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
