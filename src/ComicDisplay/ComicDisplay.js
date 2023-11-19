import React from 'react';
import './ComicDisplay.css';



const ComicDisplay = ({ images }) => {

    const downloadImages = () => {
        const imagesPerRow = 5;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
    
        // Calculate the number of rows needed
        const totalRows = Math.ceil(images.length / imagesPerRow);
        const canvasHeight = totalRows * 300; // Assuming each image is 300px high
    
        // Set canvas size based on the total width and height of images
        canvas.width = imagesPerRow * 320; // Assuming each image is 320px wide
        canvas.height = canvasHeight;
    
        // Draw images on the canvas
        let currentX = 0;
        let currentY = 0;
    
        images.forEach((imageSrc, index) => {
          const img = new Image();
          img.src = imageSrc;
    
          // Calculate the position for each image in the grid
          const rowIndex = Math.floor(index / imagesPerRow);
          const colIndex = index % imagesPerRow;
    
          // Draw the image at the calculated position
          ctx.drawImage(img, colIndex * 320, rowIndex * 300, 320, 300); // Adjust width and height as needed
        });
    
        // Convert the canvas to a data URL and trigger the download
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'comic_grid.png';
        link.click();
      };
       

  return (
    <div>
      <h2>Generated Comic:</h2>
      <button onClick={downloadImages}>Download ComicStrip</button>
      {images.map((image, index) => (
        <img key={index} src={URL.createObjectURL(image)} alt={`Panel ${index + 1}`} />
      ))}

    </div>

  );
};

export default ComicDisplay;
