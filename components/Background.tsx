import { FC } from 'react';

interface BackgroundProps {}

const Background: FC<BackgroundProps> = () => {
  return (
    <div className="lines">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

export default Background;
