import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [imageUrls, setImageUrls] = useState([
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
    'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=',
  ])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex + 1 >= imageUrls.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((currentIndex) => currentIndex + 1);
    };
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageUrls.length - 1);
    } else {
      setCurrentImageIndex(currentIndex => currentIndex - 1);
    };
  };

  return (
    <div className={styles.wholeAppComponent}>
      <header>
        <h1>Carousel</h1>
      </header>
      <main>
        <section className={styles.carousel}>
          <button type="button" onClick={prevImage}>&laquo;</button>
          <div className={styles.imageContainer}>
            <img src={imageUrls[currentImageIndex]} alt="Random" className={styles.image}/>
          </div>
          <button type='button' onClick={nextImage}>&raquo;</button>
        </section>
      </main>
    </div>
  );
}

export default App;
