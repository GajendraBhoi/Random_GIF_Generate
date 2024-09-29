import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-[650px] bg-gradient-to-r from-red-500 to-red-700 border-2 border-red-900 rounded-2xl p-8 flex flex-col items-center gap-9 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105'>
      <p className='text-2xl font-semibold text-white'>Random {tag} GIF</p>

      {loading ? (
        <Spinner />
      ) : (
        <img 
          src={gif} 
          alt="random img" 
          className='rounded-lg shadow-md transition-transform duration-700 ease-in-out hover:rotate-3 hover:scale-105'
        />
      )}

      <input 
        type="text" 
        placeholder="Enter text" 
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        className='w-full px-4 py-2 text-lg text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out'
      />

      <button 
        onClick={() => fetchData()}
        className='px-6 py-2 text-lg font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-300 ease-in-out'
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
