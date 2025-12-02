import React, { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, speed = 0.5 }) => {
  return (
    <div className="parallax-wrapper">
      {children}
    </div>
  );
};

export default ParallaxSection;

