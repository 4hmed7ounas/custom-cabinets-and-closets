import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
}) => {
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-500" : "text-gray-300"}
        >
          <FaStar size={16}/>
        </span>
      ))}
    </div>
  );
};
