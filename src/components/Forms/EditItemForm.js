import React, { useState, useEffect } from "react";

const EditItemForm = ({ item, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    category: '',
    count: 0,
    shortDescription: '',
    instructions: '',
  });

  useEffect(() => {
    // Populate the form with item data when the component mounts or item prop changes
    if (item) {
      setFormData({
        _id: item._id,
        name: item.name || '',
        category: item.category || '',
        count: item.count || 0,
        shortDescription: item.shortDescription || '',
        instructions: item.instructions || '',
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700">Count</label>
          <input type="number" id="count" name="count" value={formData.count} onChange={handleChange} required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
          <textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button type="button" onClick={onClose}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none">
          Cancel
        </button>
        <button type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditItemForm;