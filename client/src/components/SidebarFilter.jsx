import React, { useState } from 'react';

const SidebarFilter = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const [priceRange, setPriceRange] = useState(650);
  const [brand, setBrand] = useState('');

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  return (
    <div className="w-60 p-2 bg-gray-50 border-r border-gray-200 min-h-screen">
      {/* Sort By */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Sort By</h3>
        <div className="space-y-2 text-gray-700">
          {['Newest', 'Price Low To High', 'Price High To Low', 'Top Rated'].map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="sort"
                value={option}
                checked={selectedSort === option}
                onChange={handleSortChange}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Price</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>₹0</span>
          <span>₹{priceRange}</span>
        </div>
        <input
          type="range"
          min="0"
          max="650"
          step="10"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Brand</h3>
        <div className="space-y-2 text-gray-700">
          {['Great Value', 'Nature Valley', 'Oxi Clean', 'Suave', 'Dove'].map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="sort"
                value={option}
                checked={selectedSort === option}
                onChange={handleSortChange}
                className="mr-2"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
