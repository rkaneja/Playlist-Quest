function getAccessToken() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}

const accessToken = getAccessToken();

if (accessToken) {
    // Store the access token, e.g., in localStorage or a cookie
    localStorage.setItem("spotify_access_token", accessToken);

    // Redirect the user to the main page or any other desired location
    window.location.href = "song-card.html";
} else {
    // Handle the error, e.g., display a message or redirect the user
    alert("Failed to authenticate with Spotify.");
    window.location.href = "index.html";
}
