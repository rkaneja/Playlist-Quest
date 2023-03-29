import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingRouter from './pages/landing/LandingRouter';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingRouter />} />
      </Routes>
    </Router>
  );
};

export default App;