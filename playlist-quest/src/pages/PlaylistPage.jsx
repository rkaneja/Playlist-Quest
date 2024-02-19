import React from 'react';

const PlaylistPage = () => {
  let playlist = window.localStorage.getItem('playlist');
console.log(playlist);
  return (
    <div>
      <h1>Playlist Page</h1>
      {playlist.map((song, index) => (
              <div key={index}>{song}</div>
            ))}
    </div>
  );
};

export default PlaylistPage;
