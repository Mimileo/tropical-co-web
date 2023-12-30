// List.tsx

import React from 'react';

const ListLayout: React.FC = () => {
  // Sample data for the list
  const items: string[] = ['Lawn Installation', 'Garden Design', 'Irrigation Systems', 'Tree Planting', 'Outdoor Lighting', 'Hardscaping', 'Maintenance Services'];

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

export default ListLayout;
