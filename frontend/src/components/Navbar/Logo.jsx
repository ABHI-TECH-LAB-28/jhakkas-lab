import React from 'react';

const Logo = ({ className }) => (
  <svg 
    className={className}
    width="240" 
    height="60" 
    viewBox="0 0 240 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        .logo-badge { fill: #FFD600; }
        .logo-badge-text { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 900; fill: #050505; text-anchor: middle; }
        .logo-text-jhakkas { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; fill: #FFFFFF; letter-spacing: 0.5px; }
        .logo-text-lab { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; fill: #FFD600; letter-spacing: 0.5px; }
      `}
    </style>
    
    {/* Yellow badge with JL */}
    <circle cx="28" cy="30" r="20" className="logo-badge" />
    <text x="28" y="37" className="logo-badge-text">JL</text>
    
    {/* JHAKKAS LAB text */}
    <text x="58" y="37" className="logo-text-jhakkas">JHAKKAS</text>
    <text x="160" y="37" className="logo-text-lab">LAB</text>
  </svg>
);

export default Logo;
