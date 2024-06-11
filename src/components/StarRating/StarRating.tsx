import React from "react";
import { StarContainer, StarIcon } from "./styled-components";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <StarContainer>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} className="fas fa-star"></StarIcon>
      ))}
      {halfStar && <StarIcon className="fas fa-star-half-alt"></StarIcon>}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon key={index} className="far fa-star"></StarIcon>
      ))}
    </StarContainer>
  );
};

export default StarRating;
