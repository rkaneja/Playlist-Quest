import { Routes, Route } from 'react-router-dom';

// Import Landing Site Pages
import LandingPage from './LandingPage';
import InfoPage from './InfoPage';
import AboutPage from './AboutPage';

const LandingRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/info" Component={InfoPage} />
      <Route path="/about" Component={AboutPage} />
    </Routes>
  );
};

export default LandingRouter;
