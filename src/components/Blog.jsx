import React, { useState, useEffect } from 'react';
import { storage, ref, listAll, getDownloadURL } from '../firebaseConfig';

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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {images.length > 0 ? (
        <>
          <img src={images[currentIndex]} alt="Project" className="max-w-full max-h-full" />
          <div className="flex mt-4">
            <button onClick={prevImage} className="p-2 mx-2 border">⬅️</button>
            <button onClick={nextImage} className="p-2 mx-2 border">➡️</button>
          </div>
          <div className="flex mt-4">
            <button onClick={prevProject} className="p-2 mx-2 border">⬆️</button>
            <button onClick={nextProject} className="p-2 mx-2 border">⬇️</button>
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Blog;