import React from 'react';

const MiniSongCard = ({ image, title, artist }) => {
    return (
        <div className='flex bg-blue-100 w-auto h-[10%] rounded-lg'>
            <div className='p-2'> 
                <img src={image} alt='song' className='w-full h-full rounded-lg aspect-square'/>
            </div>
            <div className='flex flex-col self-center items-center mx-2'>
                <h1 className='font-bold text-black'>{title}</h1>
                <h1 className='font-semibold text-blue-400'>{artist}</h1>
            </div>
            
        </div>
    );
};

export default MiniSongCard;
