import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { photos } from '../utils/photo';

const Projects = () => {
  const [images, setImages] = useState(photos);

  const photo = images.map((image) => ({
    ...image,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>{image.caption}</div>
        {image.tags &&
          image.tags.map((t, index) => (
            <div key={index} className="custom-overlay__tag">
              {t.title}
            </div>
          ))}
      </div>
    ),
  }));

  return (
    <section className="min-h-screen h-full w-full container mx-auto pt-20">
      <h1 className="text-3xl font-bold text-[#45505b] text-center my-4">
        My Projects
      </h1>
      <div className="w-full flex justify-center text-black dark:text-white">
        <button className="hover:text-blue-500 capitalize px-3 py-4">
          Home
        </button>
        <button className="hover:text-blue-500 capitalize px-3 py-4">
          App
        </button>
        <button className="hover:text-blue-500 capitalize px-3 py-4">
          Home
        </button>
      </div>
      <div className="my-4">
        <Gallery images={photo} enableImageSelection={false} />
      </div>
    </section>
  );
};

export default Projects;
