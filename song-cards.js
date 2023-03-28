async function fetchTopSongs(accessToken, limit = 6, offset = 0) {
    const url = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&offset=${offset}&time_range=long_term`;
    const headers = {
        "Authorization": `Bearer ${accessToken}`
    };

    const response = await fetch(url, { headers });
    const data = await response.json();
    console.log(data.items);
    return data.items;
}

function displaySongCard(song) {
        const songCard = document.getElementById("albumStuff")
        songCard.innerHTML = '';
        // add album cover to songcard
        const songImage = document.createElement("div");
        songImage.classList.add("album-cover");
        const img = document.createElement("img");
        img.src = song.album.images[0].url;
        songImage.appendChild(img);
        songCard.appendChild(songImage);
    
        const songTitle = document.createElement("h2");
        songTitle.textContent = song.name;
        songTitle.classList.add("song-title");
        songCard.appendChild(songTitle);
    
        const songArtist = document.createElement("h3");
        songArtist.textContent = song.artists.map(artist => artist.name).join(", ");
        songArtist.classList.add("artist-title");
        songCard.appendChild(songArtist);
}

let currentSongIndex = 0;
let topSongs;
let playlist = [];
let pSize = 0;

async function displayNextSong() {
    if (currentSongIndex < topSongs.length) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        displaySongCard(topSongs[currentSongIndex]);
        currentSongIndex++;
    } else {
        const accessToken = localStorage.getItem("spotify_access_token");
        console.log("Here");
        getRecommendations(playlist, accessToken);
    }
}

async function displayUserTopSongs() {
    const accessToken = localStorage.getItem("spotify_access_token");
    console.log(accessToken);
    if (accessToken) {
        topSongs = await fetchTopSongs(accessToken);
        displayNextSong();
    } else {
        alert("Please log in with Spotify to view your top songs.");
        window.location.href = "index.html";
    }
}

function addToPlaylist(){
    if (currentSongIndex < topSongs.length) {
        playlist[pSize] = topSongs[currentSongIndex];
        pSize++;
    }
    displayNextSong();
}

async function getRecommendations(songs, accessToken) {
    // Extract song IDs from the songs array
    const songIds = songs.slice(-5).map(song => song.id).join(',');
  
    // Set up the API URL and headers
    const url = `https://api.spotify.com/v1/recommendations?seed_tracks=${songIds}`;
    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
  
    // Fetch recommendations from the Spotify API
    const response = await fetch(url, { headers });
    const data = await response.json();
  
    // Return the recommended tracks
    topSongs = data.tracks;
    currentSongIndex = 0;
    console.log(topSongs);
    return data.tracks;
}

function displaySongs(){
    // Replace 'yourSongsArray' with the variable holding your array of songs
    localStorage.setItem("songsToDisplay", JSON.stringify(playlist));

    // Redirect to the new HTML file
    window.location.href = "top-songs/topsongs.html";
}
document.getElementById("acceptButton").addEventListener("click", addToPlaylist);
document.getElementById("rejectButton").addEventListener("click", displayNextSong);
document.getElementById("displaySongsButton").addEventListener("click", displaySongs);
const playPreviewButton = document.getElementById("playPreview");
const audioPlayer = document.getElementById("audioPlayer");

playPreviewButton.addEventListener("click", () => {
  const currentSong = topSongs[currentSongIndex - 1]; // Replace this with the variable holding your current song
  console.log(currentSong.name);
  if (currentSong.preview_url) {
    audioPlayer.src = currentSong.preview_url;
    audioPlayer.play();
  } else {
    alert("No preview available for this song.");
  }
});




displayUserTopSongs();
