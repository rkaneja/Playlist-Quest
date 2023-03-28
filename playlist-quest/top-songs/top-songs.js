function displaySongs(songs) {
    const songsList = document.getElementById("songsList");

    songs.forEach((song) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");

        const songImage = document.createElement("div");
        songImage.classList.add("song-image");
        const img = document.createElement("img");
        img.src = song.album.images[0].url;
        songImage.appendChild(img);
        songItem.appendChild(songImage);

        const songDetails = document.createElement("div");
        songDetails.classList.add("song-details");

        const songTitle = document.createElement("h3");
        songTitle.textContent = song.name;
        songDetails.appendChild(songTitle);

        const songArtist = document.createElement("p");
        songArtist.textContent = song.artists.map(artist => artist.name).join(", ");
        songDetails.appendChild(songArtist);

        songItem.appendChild(songDetails);
        songsList.appendChild(songItem);
    });
}

async function displaySongsList() {
    // Get the songs data from localStorage
    const songsData = localStorage.getItem("songsToDisplay");

    if (songsData) {
        // Parse the JSON string back into a JavaScript object
        const songsArray = JSON.parse(songsData);

        // Call the displaySongs function with the parsed array
        displaySongs(songsArray);
    } else {
        console.error("No songs data found in localStorage.");
    }

}

async function createPlaylist(accessToken, userId, playlistName, isPublic = true, isCollaborative = false, description = '') {
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const body = JSON.stringify({
      name: playlistName,
      public: isPublic,
      collaborative: isCollaborative,
      description: description
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating playlist:', error);
      throw error;
    }
}
async function createPlaylistWithSongs(accessToken, userId, playlistName) {
    // Create a new playlist
    const isPublic = false;
    const isCollaborative = false;
    const description = '';

    const playlist = await createPlaylist(accessToken, userId, playlistName, isPublic, isCollaborative, description);
  
    // Add songs to the newly created playlist
    const url = `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`;
    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const songsData = localStorage.getItem("songsToDisplay");
    const songsArray = JSON.parse(songsData);
    const songIds= songsArray.map(song => song.id);
    const body = JSON.stringify({
      uris: songIds.map(id => `spotify:track:${id}`)
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
  
      if (!response.ok) {
        throw new Error(`Error adding songs to playlist: ${response.statusText}`);
      }
  
      console.log('Songs added to the playlist successfully');
    } catch (error) {
      console.error('Error adding songs to the playlist:', error);
      throw error;
    }
  }
  

async function exportPlaylist(){
    const accessToken = localStorage.getItem("spotify_access_token");
    const userId = await getCurrentUserProfile(accessToken).then(profile => profile.id);
    const playlistName = 'My New Playlist';

    createPlaylistWithSongs(accessToken, userId, playlistName)

}

async function getCurrentUserProfile(accessToken) {
    const url = 'https://api.spotify.com/v1/me';
    const headers = {
      "Authorization": `Bearer ${accessToken}`
    };
  
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
  
document.getElementById("export").addEventListener("click", exportPlaylist);
displaySongsList();
