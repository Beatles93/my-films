import React, { useEffect, useState } from "react";
import { StarContainer, StarIcon } from "./styled-components";

interface StarRatingProps {
  rating: number;
  onRate: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRate }) => {
  const [currentRating, setCurrentRating] = useState<number>(rating);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleClick = (index: number) => {
    const newRating = index + 1;
    setCurrentRating(newRating);
    onRate(newRating);
  };

  const fullStars = Math.floor(currentRating);
  const halfStar = currentRating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(currentRating);

  return (
    <StarContainer>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon
          key={index}
          className="fas fa-star"
          onClick={() => handleClick(index)}
        ></StarIcon>
      ))}
      {halfStar && (
        <StarIcon
          className="fas fa-star-half-alt"
          onClick={() => handleClick(fullStars)}
        ></StarIcon>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon
          key={index}
          className="far fa-star"
          onClick={() => handleClick(fullStars + index)}
        ></StarIcon>
      ))}
    </StarContainer>
  );
};
export default StarRating;
