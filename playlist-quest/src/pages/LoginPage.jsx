import React from 'react';

const LoginPage = () => {
    function handleLoginClick() {
        // Add your logic here for when the "Login" button is clicked
        const clientId = '3f7e3ab2ed184531811ffd9eb4db0c4c';
        // const redirectUri = "https://rkaneja.github.io/Playlist-Quest/callback.html";
        const redirectUri = "http://localhost:3000/callback";
        const scopes = encodeURIComponent("user-top-read playlist-modify-private");

        const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    }
  return (
    <div className="flex flex-col items-center justify-center bg-slate-600 w-screen h-screen">
        <h1 className='text-5xl p-2'>Login using your Spotify account to start</h1>
        <button className=" bg-transparent border text-white mx-3 p-2 rounded-lg text-2xl" onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
