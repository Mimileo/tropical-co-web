// List.tsx

import React from 'react';

const ServiceList: React.FC = () => {
  // Sample data for the list
  const items: string[] = ['Pruning', 'Lawn Care', 'Custom Soil Blends', 'Organic Pesticides', 'Green Houses', 'Vertical Farming'];

  return (
    <div>
      <ul>
        {/* Use the map function to render each item in the list */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
