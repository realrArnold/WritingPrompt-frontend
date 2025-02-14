import React from 'react';

const WritingFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex gap-4">
     
        <div>
          <label className="block text-gray-700">Genre</label>
          <select name="genre" className="border rounded px-2 py-1">
            <option value="">All</option>
            <option value="Memoir">Sci_fi</option>
            <option value="Fiction">horror</option>
            <option value="Non-Fiction">Fantasy</option>

          </select>
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            className="border rounded px-2 py-1"
            placeholder="Author name"
          />
        </div>
        {/*
        <div>
          <label className="block text-gray-700">Upvotes</label>
          <input
            type="number"
            name="upvotes"
            value={filters.upvotes}
            onChange={handleChange}
            className="border rounded px-2 py-1"
            placeholder="Minimum upvotes"
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default WritingFilter;