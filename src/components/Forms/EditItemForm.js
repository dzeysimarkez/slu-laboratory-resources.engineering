// import React, { useState, useEffect } from "react";

// const EditItemForm = ({ item, onUpdate, onClose }) => {
//   const [formData, setFormData] = useState({
//     _id: '',
//     name: '',
//     category: '',
//     count: 0,
//     shortDescription: '',
//     instructions: '',
//   });

//   useEffect(() => {
//     // Populate the form with item data when the component mounts or item prop changes
//     if (item) {
//       setFormData({
//         _id: item._id,
//         name: item.name || '',
//         category: item.category || '',
//         count: item.count || 0,
//         shortDescription: item.shortDescription || '',
//         instructions: item.instructions || '',
//       });
//     }
//   }, [item]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
//                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//           <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required
//                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div>
//           <label htmlFor="count" className="block text-sm font-medium text-gray-700">Count</label>
//           <input type="number" id="count" name="count" value={formData.count} onChange={handleChange} required
//                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//         </div>
//         <div>
//           <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
//           <textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//         </div>
//         <div>
//           <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
//           <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end space-x-2">
//         <button type="button" onClick={onClose}
//                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none">
//           Cancel
//         </button>
//         <button type="submit"
//                 className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
//           Save Changes
//         </button>
//       </div>
//     </form>
//   );
// };

// export default EditItemForm;
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EditItemForm = ({ item, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    category: "",
    count: 0,
    shortDescription: "",
    instructions: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        _id: item._id,
        name: item.name || "",
        category: item.category || "",
        count: item.count || 0,
        shortDescription: item.shortDescription || "",
        instructions: item.instructions || "",
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Edit Item</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            {/* Item Information Section */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Item Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label htmlFor="name" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Item Name</label>
                  <input
                    type="text"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label htmlFor="category" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label htmlFor="count" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Count</label>
                  <input
                    type="number"
                    name="count"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.count}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label htmlFor="shortDescription" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Short Description</label>
                  <textarea
                    name="shortDescription"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            
            {/* Instructions Section */}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Instructions
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label htmlFor="instructions" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Instructions</label>
                  <textarea
                    name="instructions"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.instructions}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* No file inputs for editing, as per original code */}

            <div className="flex justify-end mt-6">
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

EditItemForm.propTypes = {
  item: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditItemForm;