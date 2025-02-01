import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ dataImages, imageRefs, onImageClick }) => {
  return (
    <ul className={css.imagesList}>
      {dataImages.map((card, index) => (
        <li
          key={card.id}
          className={css.imagesItem}
          ref={el => (imageRefs.current[index] = el)}
          onClick={() => onImageClick(card)}
        >
          <ImageCard dataAttribute={card} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
