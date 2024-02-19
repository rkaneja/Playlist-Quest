import React from 'react';
import playButton from '../play-button.svg'

const SongCard = ({ image, title, artist }) => {
    return (
        <div className='flex flex-col bg-slate-600 min-w-fit min-h-fit rounded-lg'>
            <div className='p-2'> 
                <img src={image} alt='song' className='w-full h-full rounded-lg aspect-square'/>
            </div>
            <div className='flex flex-col self-center items-center max-w-fit pb-1'>
                <h1 className='text-3xl font-bold text-black'>{title}</h1>
                <h1 className='text-3xl font-semibold text-blue-400'>{artist}</h1>
            </div>

            <div>
                <hr className=' pb-2 border-t-2 border-gray-400 w-4/5 mx-auto'/>
            </div>


            <div className='flex flex-col self-center items-center w-1/12 pb-2'>
                <img src={playButton} alt='play button' className='max-w-full'/>
            </div>
            
        </div>
    );
};

export default SongCard;
