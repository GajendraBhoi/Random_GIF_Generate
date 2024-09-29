import './App.css';
import Tag from './component/Tag';
import Random from './component/Random';

function App() {
  return (
    <div className='min-h-screen flex flex-col items-center gap-9 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10'>
      <h1 className='text-center text-5xl font-bold text-white mb-12 drop-shadow-lg animate-pulse'>RANDOM GIF</h1>
      <div className="flex flex-col gap-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
