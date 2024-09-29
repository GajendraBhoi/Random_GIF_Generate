import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function genereateHandler() {
    fetchData();
  }

  return (
    <div className='w-[650px] bg-white/90 border-2 border-gray-300 shadow-lg rounded-2xl p-8 flex flex-col items-center gap-9 transition-all duration-500 ease-in-out transform hover:scale-105'>
      <p className='text-xl font-semibold text-gray-700'>A Random GIF</p>

      {
        loading ? (
          <Spinner />
        ) : (
          <img 
            src={gif} 
            alt="random img" 
            className='rounded-lg shadow-md transition-transform duration-700 ease-in-out hover:rotate-3 hover:scale-105'
          />
        )
      }
      
      <button 
        onClick={genereateHandler}
        className='px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out'
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
