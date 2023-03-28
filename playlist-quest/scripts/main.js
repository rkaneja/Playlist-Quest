document.getElementById("loginBtn").addEventListener("click", () => {
    const clientId = '3f7e3ab2ed184531811ffd9eb4db0c4c';
    const scopes = encodeURIComponent("user-top-read playlist-modify-private");

    // TODO uncomment this chunk before pushing to main
    // const redirectUri = "https://rkaneja.github.io/Playlist-Quest/callback.html";
    // const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    // window.location.href = authUrl;

    // ----------------------------------------
    // THE LINES OF CODE ARE FOR DEVELOPMENT PURPOSES ONLY
    // THEY MUST BE COMMENTED OUT BEFORE PUSHING TO MAIN
    // ----------------------------------------
    const devRedirectUri = "http://127.0.0.1:5500/callback.html";
    const devAuthUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(devRedirectUri)}`;
    window.location.href = devAuthUrl;
});
