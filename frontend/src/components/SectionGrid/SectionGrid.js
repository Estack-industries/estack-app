import React from 'react';
import './SectionGrid.css';

export const SectionGrid = ({ children }) => {
  return (
    <div className="sectiongrid-wrapper">
      {children}
    </div>
  );
};