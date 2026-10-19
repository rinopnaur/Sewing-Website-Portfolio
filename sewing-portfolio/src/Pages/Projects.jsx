import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import styles from '../Css Modules/Projects.module.css'
import shirt1 from '../assets/shirt1.png'
import shirt2 from '../assets/shirt2.png'
import hat1 from '../assets/hat1.png'
import hat2 from '../assets/hat2.png'
import hat3 from '../assets/hat3.png'
import bag1 from '../assets/bag1.png'
import bag2 from '../assets/bag2.png'
import bag3 from '../assets/bag3.png'

function Projects(){

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);


  const projects = [
    { title: "Needles flannel copycat", images: [shirt1, shirt2] },
    { title: "Cadet Hat with tie closure", images: [hat1, hat2, hat3] },
    { title: "Messenger bag with magnetic snap", images: [bag1, bag2, bag3] },
  ];

  function handleImageClick(images, clickedIndex) {
    setCurrentImages(images.map(src => ({ src })));
    setIndex(clickedIndex);
    setOpen(true);
  }

  return(
  <>
    <div className={styles.mainContainer}>
      <div className={styles.yearContainer26}>
        <h2 className={styles.h2}>2026</h2>
          {projects.map((project) => (
            <div className={styles.row1} key={project.title}>
              <h3 className={styles.h3}>{project.title}</h3>
                <div className={styles.imageContainer}>
                  {project.images.map((img, i) => (
                    <img
                      src={img}
                      key={i}
                      className={styles.img}
                      alt={project.title}
                      onClick={() => handleImageClick(project.images, i)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
            </div>
          ))}
      </div>
    </div>

    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={currentImages}
      index={index}
    />
  </>
  );
}

export default Projects