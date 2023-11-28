import { useRef, useState } from 'react';
import { photos } from '../utils/photo';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Projects = () => {
  const containerRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [images, setImages] = useState(photos);

  const handleMouseEnter = (event) => {
    const container = event.currentTarget;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleMouseLeave = (event) => {
    const container = event.currentTarget;
    container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleFilter = (category) => {
    setCurrentCategory(category);
    switch (category) {
      case 'All':
        setImages(photos);
        break;
      case 'React':
        setImages(
          photos.filter((photo) => photo.title && photo.title.includes('React'))
        );
        break;
      case 'Wordpress':
        setImages(
          photos.filter(
            (photo) => photo.title && photo.title.includes('Wordpress')
          )
        );
        break;
      default:
        setImages(photos);
        break;
    }
  };

  return (
    <section className="min-h-screen h-full w-full container mx-auto pt-20">
      <h1 className="text-3xl font-bold text-[#45505b] text-center my-4">
        My Projects
      </h1>
      <div className="w-full flex justify-center text-black dark:text-white">
        <button
          className={`hover:text-blue-500 capitalize px-3 py-4 ${
            currentCategory === 'All' && 'font-bold'
          }`}
          onClick={() => handleFilter('All')}
        >
          ALL
        </button>
        <button
          className={`hover:text-blue-500 capitalize px-3 py-4 ${
            currentCategory === 'React' && 'font-bold'
          }`}
          onClick={() => handleFilter('React')}
        >
          React
        </button>
        <button
          className={`hover:text-blue-500 capitalize px-3 py-4 ${
            currentCategory === 'WordPress' && 'font-bold'
          }`}
          onClick={() => handleFilter('Wordpress')}
        >
          WordPress
        </button>
      </div>
      <div className="my-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="masonry_gap">
            {images.map((image, i) => (
              <div
                style={{ height: image.height, overflowY: 'auto' }}
                className=" hideScrollbar shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md object-fill w-full block"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default Projects;
