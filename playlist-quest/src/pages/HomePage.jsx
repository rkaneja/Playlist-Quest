import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    let navigate = useNavigate();
    
    function handleStartClick() {
        // Add your logic here for when the "Start" button is clicked
        navigate('/login');
    };

    return (
        <div className='bg-slate-600 max-h-screen h-screen w-screen flex flex-col justify-center items-center'>
            <h1 className='text-white text-9xl font-bold mb-2 align-top'>Playlist Quest</h1>
            <p className='text-white text-3xl mb-8'>Discover new music and build your perfect playlist</p>
            <div className='flex'>
                <button className='bg-transparent border-white border text-white px-12 py-2 rounded-lg mr-48' onClick={handleStartClick}>Start</button>
                <button className='bg-transparent border-white border text-white px-12 py-2 rounded-lg'>About</button>
            </div>
            
        </div>
    );
};

export default HomePage;
