import React from 'react';

const Logo = ({ className }) => (
  <svg 
    className={className}
    width="400" 
    height="120" 
    viewBox="0 0 400 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        .jhakkas { font-family: var(--font-brush), 'Permanent Marker', cursive; font-size: 64px; fill: #FFD600; }
        .lab { font-family: var(--font-display), 'Syne', sans-serif; font-size: 52px; font-weight: 700; fill: #FFFFFF; letter-spacing: 4px; }
        .tagline { font-family: var(--font-body), 'Space Grotesk', sans-serif; font-size: 10px; fill: #FFFFFF; letter-spacing: 12px; font-weight: 500; }
      `}
    </style>
    
    <text x="20" y="70" className="jhakkas">Jhakkas</text>
    
    <rect x="250" y="25" width="2" height="50" fill="#FFD600" opacity="0.8"/>
    
    <text x="265" y="72" className="lab">L</text>
    
    <path d="M 315 72 L 325 50 L 335 72 Z" fill="#FFD600" />
    
    <text x="345" y="72" className="lab">B</text>
    
    <text x="120" y="105" className="tagline">B A N E G A &nbsp;&nbsp; J H A K K A S</text>
  </svg>
);

export default Logo;
