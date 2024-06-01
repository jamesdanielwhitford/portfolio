import React, { useState, useEffect } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../firebaseConfig';
import '../index.css';

const Blog = () => {
  const [projects, setProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsRef = ref(storage, 'projects/');
      const response = await listAll(projectsRef);
      setProjects(response.prefixes.map((folderRef) => folderRef.fullPath));
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      fetchImages(projects[currentProjectIndex]);
    }
  }, [projects, currentProjectIndex]);

  const fetchImages = async (projectPath) => {
    const imageListRef = ref(storage, projectPath);
    const response = await listAll(imageListRef);
    const urls = await Promise.all(response.items.map((item) => getDownloadURL(item)));
    setImages(urls);
    preloadImages(urls);
  };

  const preloadImages = (urls) => {
    const preloaded = {};
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      preloaded[url] = img;
    });
    setPreloadedImages(preloaded);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setCurrentIndex(0);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setCurrentIndex(0);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      prevImage();
    } else if (direction === 'right') {
      nextImage();
    } else if (direction === 'up') {
      prevProject();
    } else if (direction === 'down') {
      nextProject();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      handleArrowClick('down');
    } else if (event.key === 'ArrowUp') {
      handleArrowClick('up');
    } else if (event.key === 'ArrowLeft') {
      handleArrowClick('left');
    } else if (event.key === 'ArrowRight') {
      handleArrowClick('right');
    } else if (event.key === 'Enter') {
      // Handle select if needed
    } else if (event.key === 'Backspace') {
      window.location.href = '/'; // Go back to landing page
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-200 container">
      <div className="image-container">
        {images.length > 0 ? (
          <img src={images[currentIndex]} alt="Project" className="project-image" />
        ) : (
          <p>Loading images...</p>
        )}
      </div>
      <div className="horizontal-buttons">
        <button className="minus-button" onClick={() => (window.location.href = '/')}>-</button>
        <div className="arrow-buttons">
          <button onClick={() => handleArrowClick('left')} className="arrow-left">◀</button>
          <div className="arrow-vertical">
            <button onClick={() => handleArrowClick('up')}>▲</button>
            <button onClick={() => handleArrowClick('down')}>▼</button>
          </div>
          <button onClick={() => handleArrowClick('right')} className="arrow-right">▶</button>
        </div>
        <button className="plus-button">+</button>
      </div>
    </div>
  );
};

export default Blog;