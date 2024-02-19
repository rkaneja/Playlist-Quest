// CallbackComponent.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SpotifyCallback() {
  const location = useLocation();
  const navigate = useNavigate();

//   const exchangeCodeForToken = async (code) => {
//     // Exchange the authorization code for access and refresh tokens
//     // Implement the logic to send the code to your backend or directly to Spotify's API
//     // Be cautious about keeping your client secret secure
//     const clientId = '3f7e3ab2ed184531811ffd9eb4db0c4c';
//     const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
//     console.log(clientSecret);
//     const redirectUri = 'http://localhost:3000/callback';
//     const params = new URLSearchParams();
//     params.append('grant_type', 'authorization_code');
//     params.append('code', code);
//     params.append('redirect_uri', redirectUri);
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
//       },
//       body: params,
//     });
//     const data = await response.json();

//     // Store the access token in local storage
//     localStorage.setItem('spotify_access_token', data.access_token);
//     localStorage.setItem('spotify_refresh_token', data.refresh_token);
//     console.log(localStorage.getItem('spotify_access_token'));
//     navigate('/game');
//     console.log(localStorage.getItem('spotify_access_token'));
//   };

  useEffect(() => {
    // Parse the authorization code from URL parameters
    const hash = window.location.hash;
    let token = window.localStorage.getItem('spotify_access_token');
    console.log('token', token);
    // console.log('code', code);
    if (!token && hash) {
      // Handle the authorization code (e.g., exchange it for tokens)
      token = hash.substring(1).split('&').find(elem => elem.includes('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('spotify_access_token', token);
      navigate('/game');
    }
    else if (token) {
        window.localStorage.setItem('spotify_access_token', token);
        navigate('/game');
    }
    // console.log('location', location);
  }, [location, navigate]);

  return (
    <div>
      Loading...
    </div>
  );
}

export default SpotifyCallback;
