// GamePage.js
import React, { useEffect } from 'react';
import SongCard from '../components/SongCard';
import Playlist from '../components/Playlist';

function GamePage() {
    const [song, setSong] = React.useState({image: "", title: "", artist: "", id: ""});
    const [list, setList] = React.useState([]);
    const [playlist, setPlaylist] = React.useState([]);
    const [isOverlayVisible, setIsOverlayVisible] = React.useState(false);
    const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);

    useEffect(() => {
        let token = window.localStorage.getItem('spotify_access_token');
        if (!token) {
            window.location.href = '/login';
        }

        const fetchData = async () => {
            let response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(response);
            const data = await response.json();
            console.log(data);
            console.log(data.items);
            let songData = data.items[0];
            setList(data.items);
            setSong({image: songData.album.images[0].url, title: songData.name, artist: songData.artists[0].name, id: songData.id});
        };

        fetchData();

    }, []);
    function generateNewList() {
        let token = window.localStorage.getItem('spotify_access_token');
        let seeds = playlist.slice(-5).map(song => song.id);
        const fetchData = async () => {
            let response = await fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${seeds.join(",")}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            console.log(data.tracks);
            let songData = data.tracks[0];
            setList(data.items);
            setSong({image: songData.album.images[0].url, title: songData.name, artist: songData.artists[0].name});
        }
        fetchData();
    }
    function handleAddClick() {
        let song = {image: list[0].album.images[0].url, title: list[0].name, artist: list[0].artists[0].name, id: list[0].id};
        if (list.length === 1) {
            generateNewList();
        }
        let nextSong = {image: list[0].album.images[0].url, title: list[0].name, artist: list[0].artists[0].name, id: list[0].id};
        setSong(nextSong);
        setList([...list].splice(1));
        setPlaylist([...playlist, song]);
    }
    function handleSkipClick() {
        if (list.length === 1) {
            generateNewList();
        }
        let nextSong = {image: list[0].album.images[0].url, title: list[0].name, artist: list[0].artists[0].name, id: list[0].id};
        setSong(nextSong);
        setList([...list].splice(1));
        console.log(nextSong);
    }
  return (
    <div className='flex flex-col items-center bg-slate-500 w-screen h-screen'>
        <h1 className='h-[10%] text-9xl mt-5'>Playlist Quest</h1>
        <div className='flex items-center justify-between min-w-full h-[90%]'>
            <button className='bg-transparent border text-white mx-9 p-2 rounded-lg text-2xl h-max w-1/6' onClick={handleSkipClick}>Skip</button>
            <SongCard image={song.image} title={song.title} artist={song.artist} />
            <button className='bg-transparent border text-white mx-9 p-2 rounded-lg text-2xl h-max w-1/6' onClick={handleAddClick}>Add to Playlist</button>
        </div>
        <button className='bg-transparent border text-white mx-9 p-2 rounded-lg text-2xl h-max w-1/6' onClick={toggleOverlay}>View Playlist</button>
        <Playlist isVisible={isOverlayVisible} onClose={toggleOverlay} songs={playlist} />
        
    </div>
  );
}

export default GamePage;
