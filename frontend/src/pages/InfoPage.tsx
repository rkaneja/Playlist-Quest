import React, { useEffect } from 'react';

const InfoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the about page!</p>
    </div>
  );
};

export default InfoPage;