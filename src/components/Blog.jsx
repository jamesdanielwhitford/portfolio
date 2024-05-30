import React, { useState, useEffect } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../firebaseConfig';

const Blog = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imageListRef = ref(storage, 'images/'); // Change this path to your images folder
      const response = await listAll(imageListRef);
      const urls = await Promise.all(response.items.map((item) => getDownloadURL(item)));
      setImages(urls);
    };

    fetchImages();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {images.length > 0 ? (
        <>
          <img src={images[currentIndex]} alt="Project" className="max-w-full max-h-full" />
          <div className="flex mt-4">
            <button onClick={prevImage} className="p-2 mx-2 border">⬅️</button>
            <button onClick={nextImage} className="p-2 mx-2 border">➡️</button>
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Blog;