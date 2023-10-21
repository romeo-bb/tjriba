import React from 'react';
import './index.css';
import bg_vid from "./Vhome.mp4";

function App() {
  return (
    <div className="App">
      <div className='h-[100vh] w-full flex justify-center items-center bg-slate-300'>
        <div className='w-[250px] h-[250px]'>
        <video
          src={bg_vid}
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted>
        </video>
        </div>
      </div>
    </div>
  );
}

export default App;
