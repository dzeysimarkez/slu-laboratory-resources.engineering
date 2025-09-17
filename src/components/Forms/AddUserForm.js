// // // // import React, { useState } from "react";
// // // // import { toast } from "react-toastify";
// // // // import axios from "axios";

// // // // const AddUserForm = ({ onClose }) => {
// // // //   // Use state for form data, initializing all fields to empty strings
// // // //   const [formData, setFormData] = useState({
// // // //     firstName: "",
// // // //     lastName: "",
// // // //     email: "",
// // // //     password: "",
// // // //     confirmPassword: "",
// // // //   });

// // // //   // State to track if the form is in a saving state
// // // //   const [isSaving, setIsSaving] = useState(false);
// // // //   const [passwordError, setPasswordError] = useState("");
// // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setPasswordError("");

// // // //     // Basic validation: Check if all required fields are filled
// // // //     if (
// // // //       !formData.firstName ||
// // // //       !formData.lastName ||
// // // //       !formData.email ||
// // // //       !formData.password
// // // //     ) {
// // // //       toast.error("Please fill in all required fields.");
// // // //       return;
// // // //     }

// // // //     // Check if the passwords match
// // // //     if (formData.password !== formData.confirmPassword) {
// // // //       setPasswordError("Passwords do not match.");
// // // //       toast.error("Passwords do not match. Please try again.");
// // // //       return;
// // // //     }

// // // //     setIsSaving(true);

// // // //     try {
// // // //       // Create a payload for user creation
// // // //       const newUserPayload = {
// // // //         firstName: formData.firstName,
// // // //         lastName: formData.lastName,
// // // //         email: formData.email,
// // // //         password: formData.password,
// // // //         isAdmin: false, // Set isAdmin to false by default
// // // //         isSuperAdmin: false, // Set isSuperAdmin to false by default
// // // //       };

// // // //       // Send the request to a new user registration endpoint
// // // //       const response = await axios.post(
// // // //         `${backendBaseUrl}/api/register`,
// // // //         newUserPayload
// // // //       );

// // // //       // Check for success status and show a toast notification
// // // //       if (response.status === 201) { // Assuming 201 Created is the response status for new user creation
// // // //         toast.success("User added successfully!");
// // // //         onClose(); // Close the form on success
// // // //       } else {
// // // //         toast.error("Failed to add user.");
// // // //       }
// // // //     } catch (error) {
// // // //       const msg = error.response?.data?.msg || "Failed to add user.";
// // // //       toast.error(msg);
// // // //       console.error("Add user failed:", error);
// // // //     } finally {
// // // //       setIsSaving(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="p-4">
// // // //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // //           <div className="text-center flex justify-between">
// // // //             <h6 className="text-blueGray-700 text-xl font-bold">Add New User</h6>
// // // //             <button
// // // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // //               type="submit"
// // // //               disabled={isSaving}
// // // //             >
// // // //               {isSaving ? "Saving..." : "Add User"}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // //             User Information
// // // //           </h6>
// // // //           <div className="flex flex-wrap">
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="firstName"
// // // //                 name="firstName"
// // // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.firstName}
// // // //                 onChange={handleInputChange}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="lastName"
// // // //                 name="lastName"
// // // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.lastName}
// // // //                 onChange={handleInputChange}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 id="email"
// // // //                 name="email"
// // // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.email}
// // // //                 onChange={handleInputChange}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <hr className="mt-6 border-b-1 border-blueGray-300" />
// // // //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // //             Security
// // // //           </h6>
// // // //           <div className="flex flex-wrap">
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 id="password"
// // // //                 name="password"
// // // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.password}
// // // //                 onChange={handleInputChange}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // // //               <label htmlFor="confirmPassword" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Confirm Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 id="confirmPassword"
// // // //                 name="confirmPassword"
// // // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                 value={formData.confirmPassword}
// // // //                 onChange={handleInputChange}
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           {passwordError && (
// // // //             <div className="text-red-500 text-xs italic px-4 mt-2">
// // // //               {passwordError}
// // // //             </div>
// // // //           )}
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

// // // // export default AddUserForm;
// // // import React, { useState } from "react";
// // // import { toast } from "react-toastify";
// // // import axios from "axios";

// // // const AddUserForm = () => {
// // //   // Use state for form data, initializing all fields to empty strings
// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //   });

// // //   // State to track if the form is in a saving state
// // //   const [isSaving, setIsSaving] = useState(false);
// // //   const [passwordError, setPasswordError] = useState("");
// // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setPasswordError("");

// // //     // Basic validation: Check if all required fields are filled
// // //     if (
// // //       !formData.firstName ||
// // //       !formData.lastName ||
// // //       !formData.email ||
// // //       !formData.password
// // //     ) {
// // //       toast.error("Please fill in all required fields.");
// // //       return;
// // //     }

// // //     // Check if the passwords match
// // //     if (formData.password !== formData.confirmPassword) {
// // //       setPasswordError("Passwords do not match.");
// // //       toast.error("Passwords do not match. Please try again.");
// // //       return;
// // //     }

// // //     setIsSaving(true);

// // //     try {
// // //       // Create a payload for user creation
// // //       // Note: isAdmin and isSuperAdmin are intentionally omitted here.
// // //       // The backend will set them to 'false' by default.
// // //       const newUserPayload = {
// // //         firstName: formData.firstName,
// // //         lastName: formData.lastName,
// // //         email: formData.email,
// // //         password: formData.password,
// // //       };

// // //       // Send the request to a new user registration endpoint
// // //       const response = await axios.post(
// // //         `${backendBaseUrl}/api/register`,
// // //         newUserPayload
// // //       );

// // //       // Check for success status and show a toast notification
// // //       if (response.status === 201) { // Assuming 201 Created is the response status for new user creation
// // //         toast.success("User added successfully!");
        
// // //       } else {
// // //         toast.error("Failed to add user.");
// // //       }
// // //     } catch (error) {
// // //       const msg = error.response?.data?.msg || "Failed to add user.";
// // //       toast.error(msg);
// // //       console.error("Add user failed:", error);
// // //     } finally {
// // //       setIsSaving(false);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="p-4">
// // //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // //           <div className="text-center flex justify-between">
// // //             <h6 className="text-blueGray-700 text-xl font-bold">Add New User</h6>
// // //             <button
// // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // //               type="submit"
// // //               disabled={isSaving}
// // //             >
// // //               {isSaving ? "Saving..." : "Add User"}
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // //             User Information
// // //           </h6>
// // //           <div className="flex flex-wrap">
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
// // //               <input
// // //                 type="text"
// // //                 id="firstName"
// // //                 name="firstName"
// // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.firstName}
// // //                 onChange={handleInputChange}
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
// // //               <input
// // //                 type="text"
// // //                 id="lastName"
// // //                 name="lastName"
// // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.lastName}
// // //                 onChange={handleInputChange}
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 name="email"
// // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.email}
// // //                 onChange={handleInputChange}
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //           <hr className="mt-6 border-b-1 border-blueGray-300" />
// // //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // //             Security
// // //           </h6>
// // //           <div className="flex flex-wrap">
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 name="password"
// // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.password}
// // //                 onChange={handleInputChange}
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="w-full lg:w-6/12 px-4 mb-3">
// // //               <label htmlFor="confirmPassword" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Confirm Password</label>
// // //               <input
// // //                 type="password"
// // //                 id="confirmPassword"
// // //                 name="confirmPassword"
// // //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                 value={formData.confirmPassword}
// // //                 onChange={handleInputChange}
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //           {passwordError && (
// // //             <div className="text-red-500 text-xs italic px-4 mt-2">
// // //               {passwordError}
// // //             </div>
// // //           )}
// // //           <div className="flex justify-end mt-6">
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

// // // export default AddUserForm;

// // import React, { useState } from "react";
// // import { toast } from "react-toastify";
// // import axios from "axios";
// // import { useRouter } from "next/router";

// // const AddUserForm = () => {
// //   // Use state for form data, initializing all fields to empty strings
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   // State to track if the form is in a saving state
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [passwordError, setPasswordError] = useState("");
// //   const backendBaseUrl = "https://slu-backend.vercel.app";
// //   const router = useRouter();

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setPasswordError("");

// //     // Basic validation: Check if all required fields are filled
// //     if (
// //       !formData.firstName ||
// //       !formData.lastName ||
// //       !formData.email ||
// //       !formData.password
// //     ) {
// //       toast.error("Please fill in all required fields.");
// //       return;
// //     }

// //     // Check if the passwords match
// //     if (formData.password !== formData.confirmPassword) {
// //       setPasswordError("Passwords do not match.");
// //       toast.error("Passwords do not match. Please try again.");
// //       return;
// //     }

// //     setIsSaving(true);

// //     try {
// //       // Create a payload for user creation
// //       const newUserPayload = {
// //         firstName: formData.firstName,
// //         lastName: formData.lastName,
// //         email: formData.email,
// //         password: formData.password,
// //       };

// //       // Send the request to a new user registration endpoint
// //       const response = await axios.post(
// //         `${backendBaseUrl}/api/register`,
// //         newUserPayload
// //       );

// //       // Check for success status and show a toast notification
// //       if (response.status === 201) {
// //         toast.success("User added successfully!");
// //         // Redirect the user to the list of users after successful creation
// //         router.push("/dashboard/users");
// //       } else {
// //         toast.error("Failed to add user.");
// //       }
// //     } catch (error) {
// //       const msg = error.response?.data?.msg || "Failed to add user.";
// //       toast.error(msg);
// //       console.error("Add user failed:", error);
// //     } finally {
// //       setIsSaving(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-4">
// //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// //           <div className="text-center flex justify-between">
// //             <h6 className="text-blueGray-700 text-xl font-bold">Add New User</h6>
// //             <button
// //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// //               type="submit"
// //               disabled={isSaving}
// //             >
// //               {isSaving ? "Saving..." : "Add User"}
// //             </button>
// //           </div>
// //         </div>
// //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// //             User Information
// //           </h6>
// //           <div className="flex flex-wrap">
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="firstName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">First Name</label>
// //               <input
// //                 type="text"
// //                 id="firstName"
// //                 name="firstName"
// //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.firstName}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="lastName" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Last Name</label>
// //               <input
// //                 type="text"
// //                 id="lastName"
// //                 name="lastName"
// //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.lastName}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="email" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Email</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //           </div>
// //           <hr className="mt-6 border-b-1 border-blueGray-300" />
// //           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// //             Security
// //           </h6>
// //           <div className="flex flex-wrap">
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 name="password"
// //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.password}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //             <div className="w-full lg:w-6/12 px-4 mb-3">
// //               <label htmlFor="confirmPassword" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Confirm Password</label>
// //               <input
// //                 type="password"
// //                 id="confirmPassword"
// //                 name="confirmPassword"
// //                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                 value={formData.confirmPassword}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //             </div>
// //           </div>
// //           {passwordError && (
// //             <div className="text-red-500 text-xs italic px-4 mt-2">
// //               {passwordError}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default AddUserForm;

// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddUserForm = () => {
//   // Use state for form data, initializing all fields to empty strings
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // State to track if the form is in a saving state
//   const [isSaving, setIsSaving] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const backendBaseUrl = "https://slu-backend.vercel.app";

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const resetForm = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setPasswordError("");
//     setIsSaving(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setPasswordError("");

//     // Basic validation: Check if all required fields are filled
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.password
//     ) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     // Check if the passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match.");
//       toast.error("Passwords do not match. Please try again.");
//       return;
//     }

//     setIsSaving(true);

//     try {
//       // Create a payload for user creation
//       const newUserPayload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       };

//       // Send the request to a new user registration endpoint
//       const response = await axios.post(
//         `${backendBaseUrl}/api/register`,
//         newUserPayload
//       );

//       // Check for success status and show a toast notification
//       if (response.status === 201) {
//         toast.success("User added successfully!");
//         resetForm(); // Reset the form fields upon success
//       } else {
//         toast.error("Failed to add user.");
//       }
//     } catch (error) {
//       const msg = error.response?.data?.msg || "Failed to add user.";
//       toast.error(msg);
//       console.error("Add user failed:", error);
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//         <div className="rounded-t bg-white mb-0 px-6 py-6">
//           <div className="text-center flex justify-between">
//             <h6 className="text-blueGray-700 text-xl font-bold">Add New User</h6>
//             <button
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="submit"
//               disabled={isSaving}
//             >
//               {isSaving ? "Saving..." : "Add User"}
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
//                 required
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
//                 required
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
//                 required
//               />
//             </div>
//           </div>
//           <hr className="mt-6 border-b-1 border-blueGray-300" />
//           <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//             Security
//           </h6>
//           <div className="flex flex-wrap">
//             <div className="w-full lg:w-6/12 px-4 mb-3">
//               <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="w-full lg:w-6/12 px-4 mb-3">
//               <label htmlFor="confirmPassword" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           {passwordError && (
//             <div className="text-red-500 text-xs italic px-4 mt-2">
//               {passwordError}
//             </div>
//           )}
//           <div className="flex justify-end mt-6">
//             <button
//               className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="button"
//               onClick={resetForm}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default AddUserForm;

import React, { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  
  const backendBaseUrl = "https://slu-backend.vercel.app";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const displayMessage = (msg, color, duration = 3000) => {
    setMessage(msg);
    setMessageColor(color);
    
    // Clear the message after a set duration
    setTimeout(() => {
      setMessage("");
      setMessageColor("");
    }, duration);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setPasswordError("");
    setMessage("");
    setMessageColor("");
    setIsSaving(false);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setPasswordError("");
//     setMessage("");
//     setMessageColor("");

//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.password
//     ) {
//       displayMessage("Please fill in all required fields.", "text-red-500");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match.");
//       displayMessage("Passwords do not match. Please try again.", "text-red-500");
//       return;
//     }

//     setIsSaving(true);

//     try {
//       const newUserPayload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       };

//       const response = await axios.post(
//         `${backendBaseUrl}/api/register`,
//         newUserPayload
//       );

//       if (response.status === 201) {
//         displayMessage("User added successfully!", "text-green-500");
//         resetForm();
//       } else {
//         displayMessage("Failed to add user.", "text-red-500");
//       }
//     } catch (error) {
//       const msg = error.response?.data?.msg || "Failed to add user.";
//       displayMessage(msg, "text-red-500");
//       console.error("Add user failed:", error);
//     } finally {
//       setIsSaving(false);
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  setPasswordError("");
  setMessage("");
  setMessageColor("");

  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password
  ) {
    displayMessage("Please fill in all required fields.", "text-red-500");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setPasswordError("Passwords do not match.");
    displayMessage("Passwords do not match. Please try again.", "text-red-500");
    return;
  }

  setIsSaving(true);

  try {
    const newUserPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    const response = await axios.post(
      `${backendBaseUrl}/api/register`,
      newUserPayload
    );

    if (response.status === 201) {
      // First, display the success message
      displayMessage("User added successfully!", "text-green-500");
      
      // Then, wait a few hundred milliseconds before resetting the form
      // This gives the user time to see the success message
      setTimeout(() => {
        resetForm();
      }, 500); // 500ms delay to allow the message to show
    } else {
      displayMessage("Failed to add user.", "text-red-500");
    }
  } catch (error) {
    const msg = error.response?.data?.msg || "Failed to add user.";
    displayMessage(msg, "text-red-500");
    console.error("Add user failed:", error);
  } finally {
    setIsSaving(false);
  }
};
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New User</h6>
            {message && (
              <div className={`${messageColor} font-bold text-sm mt-2`}>
                {message}
              </div>
            )}
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Add User"}
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Security
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mb-3">
              <label htmlFor="password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.password}
                onChange={handleInputChange}
                required
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
                required
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
              onClick={resetForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;