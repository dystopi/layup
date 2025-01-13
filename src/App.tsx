import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MapRendererPage from './view/mapRendererPage.tsx';
import LayupSequencePage from './view/layupSequencePage.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Layup Interview Challenge</h1>
          <nav>
            <Link to="/">Map Renderer</Link> | <Link to="/layupSequence">Layup Sequence</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MapRendererPage />} />
          <Route path="/layupSequence" element={<LayupSequencePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

