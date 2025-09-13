// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import { toast } from "react-toastify";
// // // // // // // import PropTypes from "prop-types";

// // // // // // // const EditUserForm = ({ user, onCancel, onSuccess }) => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     firstName: user?.firstName || "",
// // // // // // //     lastName: user?.lastName || "",
// // // // // // //     email: user?.email || "",
// // // // // // //   });
  
// // // // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // // // //   useEffect(() => {
// // // // // // //     if (user) {
// // // // // // //       setFormData({
// // // // // // //         firstName: user.firstName || "",
// // // // // // //         lastName: user.lastName || "",
// // // // // // //         email: user.email || "",
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }, [user]);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData((prevData) => ({
// // // // // // //       ...prevData,
// // // // // // //       [name]: value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       await axios.put(`${backendBaseUrl}/api/update-user/${user._id}`, formData);
// // // // // // //       toast.success("User updated successfully!");
// // // // // // //       onSuccess();
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Failed to update user:", err);
// // // // // // //       toast.error("Failed to update user. Please try again.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
// // // // // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // // // // //           <div className="text-center flex justify-between">
// // // // // // //             <h6 className="text-blueGray-700 text-xl font-bold">Edit User</h6>
// // // // // // //             <button
// // // // // // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // // // //               type="submit"
// // // // // // //               onClick={handleSubmit}
// // // // // // //             >
// // // // // // //               Save
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // // // // //           <form onSubmit={handleSubmit}>
// // // // // // //             {/* User Information Section */}
// // // // // // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // // // // //               User Information
// // // // // // //             </h6>
// // // // // // //             <div className="flex flex-wrap">
// // // // // // //               <div className="w-full lg:w-6/12 px-4">
// // // // // // //                 <div className="relative w-full mb-3">
// // // // // // //                   <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     id="firstName"
// // // // // // //                     name="firstName"
// // // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // // //                     value={formData.firstName}
// // // // // // //                     onChange={handleChange}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="w-full lg:w-6/12 px-4">
// // // // // // //                 <div className="relative w-full mb-3">
// // // // // // //                   <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     id="lastName"
// // // // // // //                     name="lastName"
// // // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // // //                     value={formData.lastName}
// // // // // // //                     onChange={handleChange}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <div className="w-full lg:w-12/12 px-4">
// // // // // // //                 <div className="relative w-full mb-3">
// // // // // // //                   <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email Address</label>
// // // // // // //                   <input
// // // // // // //                     type="email"
// // // // // // //                     id="email"
// // // // // // //                     name="email"
// // // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // // //                     value={formData.email}
// // // // // // //                     onChange={handleChange}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-end mt-6">
// // // // // // //               <button
// // // // // // //                 className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // // // // //                 type="button"
// // // // // // //                 onClick={onCancel}
// // // // // // //               >
// // // // // // //                 Cancel
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </form>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // EditUserForm.propTypes = {
// // // // // // //   user: PropTypes.object,
// // // // // // //   onCancel: PropTypes.func.isRequired,
// // // // // // //   onSuccess: PropTypes.func.isRequired,
// // // // // // // };

// // // // // // // export default EditUserForm;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import PropTypes from "prop-types";

// // // // // // const EditUserForm = ({ user, onUpdate, onCancel }) => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     firstName: user?.firstName || "",
// // // // // //     lastName: user?.lastName || "",
// // // // // //     email: user?.email || "",
// // // // // //   });
  
// // // // // //   // This useEffect ensures the form state is updated whenever the 'user' prop changes.
// // // // // //   useEffect(() => {
// // // // // //     if (user) {
// // // // // //       setFormData({
// // // // // //         firstName: user.firstName || "",
// // // // // //         lastName: user.lastName || "",
// // // // // //         email: user.email || "",
// // // // // //       });
// // // // // //     }
// // // // // //   }, [user]);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prevData) => ({
// // // // // //       ...prevData,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     onUpdate(formData); // Call the parent's update function
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0">
// // // // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // // // //           <div className="text-center flex justify-between">
// // // // // //             <h6 className="text-blueGray-700 text-xl font-bold">Edit User</h6>
// // // // // //             <button
// // // // // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // // //               type="submit"
// // // // // //               onClick={handleSubmit}
// // // // // //             >
// // // // // //               Save
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // // // //           <form onSubmit={handleSubmit}>
// // // // // //             {/* User Information Section */}
// // // // // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // // // //               User Information
// // // // // //             </h6>
// // // // // //             <div className="flex flex-wrap">
// // // // // //               <div className="w-full lg:w-6/12 px-4">
// // // // // //                 <div className="relative w-full mb-3">
// // // // // //                   <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     id="firstName"
// // // // // //                     name="firstName"
// // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                     value={formData.firstName}
// // // // // //                     onChange={handleChange}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="w-full lg:w-6/12 px-4">
// // // // // //                 <div className="relative w-full mb-3">
// // // // // //                   <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     id="lastName"
// // // // // //                     name="lastName"
// // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                     value={formData.lastName}
// // // // // //                     onChange={handleChange}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="w-full lg:w-12/12 px-4">
// // // // // //                 <div className="relative w-full mb-3">
// // // // // //                   <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email Address</label>
// // // // // //                   <input
// // // // // //                     type="email"
// // // // // //                     id="email"
// // // // // //                     name="email"
// // // // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                     value={formData.email}
// // // // // //                     onChange={handleChange}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex justify-end mt-6">
// // // // // //               <button
// // // // // //                 className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // // // //                 type="button"
// // // // // //                 onClick={onCancel}
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // EditUserForm.propTypes = {
// // // // // //   user: PropTypes.object,
// // // // // //   onUpdate: PropTypes.func.isRequired,
// // // // // //   onCancel: PropTypes.func.isRequired,
// // // // // // };

// // // // // // export default EditUserForm;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { toast } from "react-toastify";

// // // // // // const EditUserForm = ({ user, onUpdate, onClose }) => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     _id: user?._id || "",
// // // // // //     name: user?.name || "",
// // // // // //     email: user?.email || "",
// // // // // //     role: user?.role || "",
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     if (user) {
// // // // // //       setFormData({
// // // // // //         _id: user._id || "",
// // // // // //         name: user.name || "",
// // // // // //         email: user.email || "",
// // // // // //         role: user.role || "",
// // // // // //       });
// // // // // //     }
// // // // // //   }, [user]);

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prevData) => ({
// // // // // //       ...prevData,
// // // // // //       [name]: value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       await onUpdate(formData);
// // // // // //     } catch (error) {
// // // // // //       console.error("Failed to update user:", error);
// // // // // //       toast.error("Failed to update user.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit} className="p-4">
// // // // // //       <div className="relative flex flex-col break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
// // // // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // // // //           <div className="text-center flex justify-between items-center">
// // // // // //             <h6 className="text-gray-700 text-xl font-bold">Edit User</h6>
// // // // // //             <button
// // // // // //               className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // // //               type="submit"
// // // // // //             >
// // // // // //               Save
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // // // //           <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // // // //             User Information
// // // // // //           </h6>
// // // // // //           <div className="flex flex-wrap">
// // // // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // // // //               <label htmlFor="name" className="block uppercase text-gray-600 text-xs font-bold mb-2">Name</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="name"
// // // // // //                 name="name"
// // // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                 value={formData.name}
// // // // // //                 onChange={handleInputChange}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // // // //               <label htmlFor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 id="email"
// // // // // //                 name="email"
// // // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleInputChange}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="w-full px-4 mb-3">
// // // // // //               <label htmlFor="role" className="block uppercase text-gray-600 text-xs font-bold mb-2">Role</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 id="role"
// // // // // //                 name="role"
// // // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // // //                 value={formData.role}
// // // // // //                 onChange={handleInputChange}
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="flex justify-end mt-6">
// // // // // //             <button
// // // // // //               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // // // //               type="button"
// // // // // //               onClick={onClose}
// // // // // //             >
// // // // // //               Cancel
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </form>
// // // // // //   );
// // // // // // };

// // // // // // export default EditUserForm;
// // // // // import React, { useState } from "react";

// // // // // const EditUserForm = ({ user, onUpdate, onClose }) => {
// // // // //   // Use a temporary state for form data
// // // // //   const [formData, setFormData] = useState({
// // // // //      _id: user?._id || "",
// // // // //     firstName: user?.firstName || "",
// // // // //     lastName: user?.lastName || "",
// // // // //     email: user?.email || "",
// // // // //   });

// // // // //   const handleInputChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prevData) => ({
// // // // //       ...prevData,
// // // // //       [name]: value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Data being sent from form:", formData);
// // // // //     onUpdate(formData);
// // // // //   };

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="p-4">
// // // // //       <div className="relative flex flex-col break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
// // // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // // //           <div className="text-center flex justify-between items-center">
// // // // //             <h6 className="text-gray-700 text-xl font-bold">Edit User</h6>
// // // // //             <button
// // // // //               className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // //               type="submit"
// // // // //             >
// // // // //               Save
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // // //           <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // // //             User Information
// // // // //           </h6>
// // // // //           <div className="flex flex-wrap">
// // // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // // //               <label htmlFor="firstName" className="block uppercase text-gray-600 text-xs font-bold mb-2">First Name</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="firstName"
// // // // //                 name="firstName"
// // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // //                 value={formData.firstName}
// // // // //                 onChange={handleInputChange}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // // //               <label htmlFor="lastName" className="block uppercase text-gray-600 text-xs font-bold mb-2">Last Name</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="lastName"
// // // // //                 name="lastName"
// // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // //                 value={formData.lastName}
// // // // //                 onChange={handleInputChange}
// // // // //               />
// // // // //             </div>
// // // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // // //               <label htmlFor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 id="email"
// // // // //                 name="email"
// // // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleInputChange}
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="flex justify-end mt-6">
// // // // //             <button
// // // // //               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // // //               type="button"
// // // // //               onClick={onClose}
// // // // //             >
// // // // //               Cancel
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </form>
// // // // //   );
// // // // // };

// // // // // export default EditUserForm;
// // // // import React, { useState } from "react";
// // // // import { toast } from "react-toastify"; // Import toast for user notifications

// // // // const EditUserForm = ({ user, onUpdate, onClose }) => {
// // // //   // Use a temporary state for form data
// // // //   const [formData, setFormData] = useState({
// // // //       _id: user?._id || "",
// // // //     firstName: user?.firstName || "",
// // // //     lastName: user?.lastName || "",
// // // //     email: user?.email || "",
// // // //   });
  
// // // //   // New state to track if the form is in a saving state
// // // //   const [isSaving, setIsSaving] = useState(false);

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSaving(true); // Set saving state to true
    
// // // //     try {
// // // //       // The onUpdate prop is an async function from Settings.js
// // // //       await onUpdate(formData);
// // // //       // Display a success message after the update is complete
// // // //       toast.success("User updated successfully!");
// // // //       onClose(); // Close the form on success
// // // //     } catch (error) {
// // // //       // Display an error message if the update fails
// // // //       toast.error("Failed to update user.");
// // // //       console.error("Update failed:", error);
// // // //     } finally {
// // // //       setIsSaving(false); // Reset saving state regardless of outcome
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="p-4">
// // // //       <div className="relative flex flex-col break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
// // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // //           <div className="text-center flex justify-between items-center">
// // // //             <h6 className="text-gray-700 text-xl font-bold">Edit User</h6>
// // // //             <button
// // // //               className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // //               type="submit"
// // // //               disabled={isSaving} // Disable the button while saving
// // // //             >
// // // //               {isSaving ? "Saving..." : "Save"}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // //           <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // //             User Information
// // // //           </h6>
// // // //           <div className="flex flex-wrap">
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="firstName" className="block uppercase text-gray-600 text-xs font-bold mb-2">First Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="firstName"
// // // //                 name="firstName"
// // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.firstName}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //             </div>
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="lastName" className="block uppercase text-gray-600 text-xs font-bold mb-2">Last Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="lastName"
// // // //                 name="lastName"
// // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.lastName}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //             </div>
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 id="email"
// // // //                 name="email"
// // // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.email}
// // // //                 onChange={handleInputChange}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="flex justify-end mt-6">
// // // //             <button
// // // //               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // //               type="button"
// // // //               onClick={onClose}
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default EditUserForm;
// // // import React, { useState } from "react";
// // // import { toast } from "react-toastify"; // Import toast for user notifications

// // // const EditUserForm = ({ user, onUpdate, onClose }) => {
// // //   // Use a temporary state for form data
// // //   const [formData, setFormData] = useState({
// // //       _id: user?._id || "",
// // //     firstName: user?.firstName || "",
// // //     lastName: user?.lastName || "",
// // //     email: user?.email || "",
// // //   });
  
// // //   // New state to track if the form is in a saving state
// // //   const [isSaving, setIsSaving] = useState(false);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsSaving(true); // Set saving state to true
    
// // //     try {
// // //       // The onUpdate prop is an async function from Settings.js
// // //       await onUpdate(formData);
// // //       // Display a success message after the update is complete
// // //       toast.success("User updated successfully!");
// // //       onClose(); // Close the form on success
// // //     } catch (error) {
// // //       // Display an error message if the update fails
// // //       toast.error("Failed to update user.");
// // //       console.error("Update failed:", error);
// // //     } finally {
// // //       setIsSaving(false); // Reset saving state regardless of outcome
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="p-4">
// // //       <div className="relative flex flex-col break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
// // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // //           <div className="text-center flex justify-between items-center">
// // //             <h6 className="text-gray-700 text-xl font-bold">Edit User</h6>
// // //           </div>
// // //         </div>
// // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // //           <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // //             User Information
// // //           </h6>
// // //           <div className="flex flex-wrap">
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="firstName" className="block uppercase text-gray-600 text-xs font-bold mb-2">First Name</label>
// // //               <input
// // //                 type="text"
// // //                 id="firstName"
// // //                 name="firstName"
// // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.firstName}
// // //                 onChange={handleInputChange}
// // //               />
// // //             </div>
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="lastName" className="block uppercase text-gray-600 text-xs font-bold mb-2">Last Name</label>
// // //               <input
// // //                 type="text"
// // //                 id="lastName"
// // //                 name="lastName"
// // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.lastName}
// // //                 onChange={handleInputChange}
// // //               />
// // //             </div>
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 name="email"
// // //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.email}
// // //                 onChange={handleInputChange}
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="flex justify-end mt-6">
// // //             <button
// // //               className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // //               type="submit"
// // //               disabled={isSaving} // Disable the button while saving
// // //             >
// // //               {isSaving ? "Saving..." : "Save"}
// // //             </button>
// // //             <button
// // //               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // //               type="button"
// // //               onClick={onClose}
// // //             >
// // //               Cancel
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </form>
// // //   );
// // // };

// // // export default EditUserForm;
// // import React, { useState } from "react";
// // import { toast } from "react-toastify"; // Import toast for user notifications

// // const EditUserForm = ({ user, onUpdate, onClose }) => {
// //   // Use a temporary state for form data
// //   const [formData, setFormData] = useState({
// //       _id: user?._id || "",
// //     firstName: user?.firstName || "",
// //     lastName: user?.lastName || "",
// //     email: user?.email || "",
// //   });
  
// //   // New state to track if the form is in a saving state
// //   const [isSaving, setIsSaving] = useState(false);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSaving(true); // Set saving state to true
    
// //     try {
// //       // The onUpdate prop is an async function from Settings.js
// //       await onUpdate(formData);
// //       // Display a success message after the update is complete
// //       toast.success("User updated successfully!");
// //       onClose(); // Close the form on success
// //     } catch (error) {
// //       // Display an error message if the update fails
// //       toast.error("Failed to update user.");
// //       console.error("Update failed:", error);
// //     } finally {
// //       setIsSaving(false); // Reset saving state regardless of outcome
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-4">
// //       <div className="relative flex flex-col break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
// //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// //           <div className="text-center flex justify-between items-center">
// //             <h6 className="text-gray-700 text-xl font-bold">Edit User</h6>
// //           </div>
// //         </div>
// //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// //           <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
// //             User Information
// //           </h6>
// //           <div className="flex flex-wrap">
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="firstName" className="block uppercase text-gray-600 text-xs font-bold mb-2">First Name</label>
// //               <input
// //                 type="text"
// //                 id="firstName"
// //                 name="firstName"
// //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.firstName}
// //                 onChange={handleInputChange}
// //               />
// //             </div>
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="lastName" className="block uppercase text-gray-600 text-xs font-bold mb-2">Last Name</label>
// //               <input
// //                 type="text"
// //                 id="lastName"
// //                 name="lastName"
// //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.lastName}
// //                 onChange={handleInputChange}
// //               />
// //             </div>
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="email" className="block uppercase text-gray-600 text-xs font-bold mb-2">Email</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //               />
// //             </div>
// //           </div>
// //           <div className="flex justify-end mt-6">
// //             <button
// //               className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// //               type="submit"
// //               disabled={isSaving} // Disable the button while saving
// //             >
// //               {isSaving ? "Saving..." : "Save"}
// //             </button>
// //             <button
// //               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// //               type="button"
// //               onClick={onClose}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default EditUserForm;
// import React, { useState } from "react";
// import { toast } from "react-toastify"; // Import toast for user notifications

// const EditUserForm = ({ user, onUpdate, onClose }) => {
//   // Use a temporary state for form data
//   const [formData, setFormData] = useState({
//       _id: user?._id || "",
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     email: user?.email || "",
//   });
  
//   // New state to track if the form is in a saving state
//   const [isSaving, setIsSaving] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSaving(true); // Set saving state to true
    
//     try {
//       // The onUpdate prop is an async function from Settings.js
//       await onUpdate(formData);
//       // Display a success message after the update is complete
//       toast.success("User updated successfully!");
//       onClose(); // Close the form on success
//     } catch (error) {
//       // Display an error message if the update fails
//       toast.error("Failed to update user.");
//       console.error("Update failed:", error);
//     } finally {
//       setIsSaving(false); // Reset saving state regardless of outcome
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//         <div className="rounded-t bg-white mb-0 px-6 py-6">
//           <div className="text-center flex justify-between">
//             <h6 className="text-blueGray-700 text-xl font-bold">Edit User</h6>
//             <button
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="submit"
//               disabled={isSaving} // Disable the button while saving
//             >
//               {isSaving ? "Saving..." : "Save"}
//             </button>
//           </div>
//         </div>
//         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//             User Information
//           </h6>
//           <div className="flex flex-wrap">
//             <div className="w-full lg:w-6/12 px-4 mb-3">
//               <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="w-full lg:w-6/12 px-4 mb-3">
//               <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="w-full lg:w-6/12 px-4 mb-3">
//               <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="flex justify-end mt-6">
//             <button
//               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="button"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditUserForm;

import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast for user notifications

const EditUserForm = ({ user, onUpdate, onClose }) => {
  // Use a temporary state for form data
  const [formData, setFormData] = useState({
    _id: user?._id || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    password: "", // Added password field
    confirmPassword: "", // Added confirm password field
  });
  
  // New state to track if the form is in a saving state
  const [isSaving, setIsSaving] = useState(false);
  const [passwordError, setPasswordError] = useState(""); // State for password mismatch error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError(""); // Clear any previous error messages

    // Check if the passwords match if a new password is being set
    if (formData.password && formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    setIsSaving(true); // Set saving state to true
    
    try {
      // Create a payload that only includes the password if it was changed
      const updatePayload = {
        _id: formData._id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        // Only include the password field if it's not empty
        ...(formData.password && { password: formData.password }),
      };

      // The onUpdate prop is an async function from Settings.js
      await onUpdate(updatePayload);
      // Display a success message after the update is complete
      toast.success("User updated successfully!");
      onClose(); // Close the form on success
    } catch (error) {
      // Display an error message if the update fails
      toast.error("Failed to update user.");
      console.error("Update failed:", error);
    } finally {
      setIsSaving(false); // Reset saving state regardless of outcome
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Edit User</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              disabled={isSaving} // Disable the button while saving
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Security
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="confirmPassword" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {passwordError && (
            <div className="text-red-500 text-xs italic px-4 mt-2">
              {passwordError}
            </div>
          )}
          <div className="flex justify-end mt-6">
            <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;
