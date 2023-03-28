document.getElementById("loginBtn").addEventListener("click", () => {
    const clientId = '3f7e3ab2ed184531811ffd9eb4db0c4c';
    const redirectUri = "https://rkaneja.github.io/Playlist-Quest/callback.html";
    const scopes = encodeURIComponent("user-top-read playlist-modify-private");

    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
});
