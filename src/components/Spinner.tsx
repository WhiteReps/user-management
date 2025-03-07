"use client";

import React from 'react';

interface SpinnerProps {
  size?: number;
  opacity?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 30, opacity = 0.4 }) => {
  return (
    <div
      className="fixed inset-0 bg-black z-10 flex items-center justify-center"
      style={{ opacity }}
    >
      <div
        className="rounded-full animate-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `conic-gradient(from 0deg at 50% 50%, white 0%, gray 50%, white 100%)`,
          mask: `radial-gradient(circle, transparent 50%, black 51%)`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;