
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="https://wms.edigitalnepal.com/wms/files/ws-profile/1651482524691_2165dd1a-eebc-45b0-9a70-05db8f02cc6b.png" 
        alt="Milton College Logo" 
        className="h-10 w-auto"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg leading-tight text-milton-blue">Milton</span>
          <span className="font-display text-sm leading-tight text-milton-red">International College</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
