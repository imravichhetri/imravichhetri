import React from 'react';

const Chip = ({children}) => {
  return (
    <span 
      className="px-2 py-1 bg-secondary-yellow text-primary-white rounded" 
      data-testid="rc-chip"
      >
      {children}
    </span>
  );
};


export default Chip;
