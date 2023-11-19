import React, { useState } from 'react';
import InputForm from './InputForm/InputForm';
import ComicDisplay from './ComicDisplay/ComicDisplay';
import query from './API';
import "./App.css";
function App() {
  const [comicImages, setComicImages] = useState([]);

  const generateComic = async (texts) => {
    const images = await Promise.all(
      texts.map((text) => query({ inputs: text }))
    );
    setComicImages(images);
  };

  return (
    <div className="app-container">
      <div className='app-container-1'>
          <InputForm onSubmit={generateComic} />
      </div>
      <div className='app-container-2'>
          <ComicDisplay images={comicImages} />
      </div>  
    </div>
  );
}

export default App;
