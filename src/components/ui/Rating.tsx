import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  size?: number;
  color?: string;
}

const Rating: React.FC<RatingProps> = ({ value, size = 20, color = '#FFD700' }) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  // Generar estrellas llenas
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} size={size} fill={color} color={color} />);
  }

  // Agregar media estrella si es necesario
  if (hasHalfStar) {
    stars.push(
      <div key="half" style={{ position: 'relative' }}>
        <Star size={size} fill={color} color={color} style={{ clipPath: 'inset(0 50% 0 0)' }} />
        <Star
          size={size}
          color={color}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            clipPath: 'inset(0 0 0 50%)',
          }}
        />
      </div>,
    );
  }

  // Completar con estrellas vacías
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} size={size} color={color} />);
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Rating;
