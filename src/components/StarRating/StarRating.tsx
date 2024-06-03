import styles from './StarRating.module.scss'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className={styles.starRating}>
      {[...Array(fullStars)].map((_, index) => (
        <i key={index} className="fas fa-star"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt"></i>}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="far fa-star"></i>
      ))}
    </div>
  );
};

export default StarRating;
