import { ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  return (
    <div className="parallax-wrapper">
      {children}
    </div>
  );
};

export default ParallaxSection;

