import React, { useEffect } from 'react';

const InfoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div>
      <h1>Info Page</h1>
    </div>
  );
};

export default InfoPage;