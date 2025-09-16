// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // export default function CardUserList() {
// // // // // // // // // //   const [users, setUsers] = useState(null); // Initialize with null to track loading
// // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // //   // Define the base URL for your backend API
// // // // // // // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchUsers = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         // Construct the full, absolute URL
// // // // // // // // // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;

// // // // // // // // // //         // Make the API call with the correct absolute URL
// // // // // // // // // //         const response = await axios.get(apiUrl);

// // // // // // // // // //         // Defensive check to ensure response.data and response.data.users exist
// // // // // // // // // //         if (response.data && Array.isArray(response.data.users)) {
// // // // // // // // // //           setUsers(response.data.users);
// // // // // // // // // //         } else {
// // // // // // // // // //           // If the data is not in the expected format, treat it as an error
// // // // // // // // // //           console.error("API response not in expected format:", response.data);
// // // // // // // // // //           setError("Data format error. Please check the API response.");
// // // // // // // // // //           setUsers([]);
// // // // // // // // // //         }

// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error("Failed to fetch users:", err);
// // // // // // // // // //         setError("Failed to connect to the server. Please check your network.");
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     fetchUsers();
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Show a loading state while fetching data
// // // // // // // // // //   if (users === null) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="text-center py-4 text-blueGray-500">
// // // // // // // // // //         <p>Loading user list...</p>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   // Handle a fetch error
// // // // // // // // // //   if(error) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="text-center py-4 text-red-500">
// // // // // // // // // //         <p>Error: {error}</p>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // // // // // // // // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // // // // // // // // //           <div className="flex flex-wrap items-center">
// // // // // // // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // // // // // // // // //               <h3 className="font-semibold text-base text-blueGray-700">
// // // // // // // // // //                 User List
// // // // // // // // // //               </h3>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="block w-full overflow-x-auto">
// // // // // // // // // //           {/* Projects table */}
// // // // // // // // // //           <table className="items-center w-full bg-transparent border-collapse">
// // // // // // // // // //             <thead>
// // // // // // // // // //               <tr>
// // // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // // //                   Name
// // // // // // // // // //                 </th>
// // // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // // //                   User Name
// // // // // // // // // //                 </th>
// // // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // // //                   Email Address
// // // // // // // // // //                 </th>
// // // // // // // // // //               </tr>
// // // // // // // // // //             </thead>
// // // // // // // // // //             <tbody>
// // // // // // // // // //               {users.length > 0 ? (
// // // // // // // // // //                 users.map((user) => (
// // // // // // // // // //                   <tr key={user._id}>
// // // // // // // // // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // // // // // // // // //                       {user.firstName} {user.lastName}
// // // // // // // // // //                     </th>
// // // // // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // // // // //                       {user.username}
// // // // // // // // // //                     </td>
// // // // // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // // // // //                       {user.email}
// // // // // // // // // //                     </td>
// // // // // // // // // //                   </tr>
// // // // // // // // // //                 ))
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td colSpan="3" className="text-center p-4">
// // // // // // // // // //                     No users found.
// // // // // // // // // //                   </td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               )}
// // // // // // // // // //             </tbody>
// // // // // // // // // //           </table>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import { toast } from "react-toastify";
// // // // // // // // // import EditUserModal from "components/Modals/EditUserModal";
// // // // // // // // // import EditUserForm from "components/Forms/EditUserForm";

// // // // // // // // // export default function CardUserList() {
// // // // // // // // //   const [users, setUsers] = useState(null);
// // // // // // // // //   const [error, setError] = useState(null);
// // // // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // // // //   const [refreshKey, setRefreshKey] = useState(0);
// // // // // // // // //   const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited

// // // // // // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchUsers = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// // // // // // // // //         const response = await axios.get(apiUrl);

// // // // // // // // //         if (response.data && Array.isArray(response.data.users)) {
// // // // // // // // //           setUsers(response.data.users);
// // // // // // // // //         } else {
// // // // // // // // //           console.error("API response not in expected format:", response.data);
// // // // // // // // //           setError("Data format error. Please check the API response.");
// // // // // // // // //           setUsers([]);
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Failed to fetch users:", err);
// // // // // // // // //         setError("Failed to connect to the server. Please check your network.");
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     fetchUsers();
// // // // // // // // //   }, [refreshKey]);

// // // // // // // // //   const handleDelete = async (userId) => {
// // // // // // // // //     if (window.confirm("Are you sure you want to delete this user?")) {
// // // // // // // // //       try {
// // // // // // // // //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// // // // // // // // //         toast.success("User deleted successfully!");
// // // // // // // // //         setRefreshKey(prevKey => prevKey + 1);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Failed to delete user:", err);
// // // // // // // // //         toast.error("Failed to delete user. Please try again.");
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleEdit = (user) => {
// // // // // // // // //     setEditingUser(user); // Set the state to the user object to be edited
// // // // // // // // //   };

// // // // // // // // //   const handleEditCancel = () => {
// // // // // // // // //     setEditingUser(null); // Close the modal by clearing the editing state
// // // // // // // // //   };

// // // // // // // // //   const handleEditSuccess = () => {
// // // // // // // // //     setEditingUser(null); // Close the modal
// // // // // // // // //     setRefreshKey(prevKey => prevKey + 1); // Force a refresh of the user list
// // // // // // // // //   };

// // // // // // // // //   const filteredUsers = users?.filter(user =>
// // // // // // // // //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // // //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // // // //   ) || [];

// // // // // // // // //   if (users === null) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="text-center py-4 text-blueGray-500">
// // // // // // // // //         <p>Loading user list...</p>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   if (error) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="text-center py-4 text-red-500">
// // // // // // // // //         <p>Error: {error}</p>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // // // // // // // //         {/* ... (rest of the table and search bar JSX) ... */}
// // // // // // // // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // // // // // // // //           <div className="flex flex-wrap items-center">
// // // // // // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // // // // // // // //               <h3 className="font-semibold text-base text-blueGray-700">
// // // // // // // // //                 User List
// // // // // // // // //               </h3>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// // // // // // // // //               <input
// // // // // // // // //                 type="text"
// // // // // // // // //                 placeholder="Search by name or email..."
// // // // // // // // //                 value={searchTerm}
// // // // // // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // // // //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="block w-full overflow-x-auto">
// // // // // // // // //           <table className="items-center w-full bg-transparent border-collapse">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // //                   Full Name
// // // // // // // // //                 </th>
// // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // //                   Email Address
// // // // // // // // //                 </th>
// // // // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // // // //                   Actions
// // // // // // // // //                 </th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               {filteredUsers.length > 0 ? (
// // // // // // // // //                 filteredUsers.map((user) => (
// // // // // // // // //                   <tr key={user._id}>
// // // // // // // // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // // // // // // // //                       {user.firstName} {user.lastName}
// // // // // // // // //                     </th>
// // // // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // // // //                       {user.email}
// // // // // // // // //                     </td>
// // // // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // // // //                       <div className="flex">
// // // // // // // // //                         <button
// // // // // // // // //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// // // // // // // // //                           type="button"
// // // // // // // // //                           onClick={() => handleEdit(user)}
// // // // // // // // //                         >
// // // // // // // // //                           Edit
// // // // // // // // //                         </button>
// // // // // // // // //                         <button
// // // // // // // // //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // // // // // //                           type="button"
// // // // // // // // //                           onClick={() => handleDelete(user._id)}
// // // // // // // // //                         >
// // // // // // // // //                           Delete
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     </td>
// // // // // // // // //                   </tr>
// // // // // // // // //                 ))
// // // // // // // // //               ) : (
// // // // // // // // //                 <tr>
// // // // // // // // //                   <td colSpan="3" className="text-center p-4">
// // // // // // // // //                     No users found.
// // // // // // // // //                   </td>
// // // // // // // // //                 </tr>
// // // // // // // // //               )}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //       {/* Conditionally render the modal */}
// // // // // // // // //       {editingUser && (
// // // // // // // // //         <EditUserModal onClose={handleEditCancel}>
// // // // // // // // //           <EditUserForm
// // // // // // // // //             user={editingUser}
// // // // // // // // //             onCancel={handleEditCancel}
// // // // // // // // //             onSuccess={handleEditSuccess}
// // // // // // // // //           />
// // // // // // // // //         </EditUserModal>
// // // // // // // // //       )}
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import { toast } from "react-toastify";
// // // // // // // import EditUserModal from "../Modals/EditUserModal";
// // // // // // // import EditUserForm from "../Forms/EditUserForm";

// // // // // // // export default function CardUserList() {
// // // // // // //   const [users, setUsers] = useState(null);
// // // // // // //   const [error, setError] = useState(null);
// // // // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // // // //   const [refreshKey, setRefreshKey] = useState(0);
// // // // // // //   const [editingUser, setEditingUser] = useState(null);

// // // // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchUsers = async () => {
// // // // // // //       try {
// // // // // // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// // // // // // //         const response = await axios.get(apiUrl);

// // // // // // //         if (response.data && Array.isArray(response.data.users)) {
// // // // // // //           setUsers(response.data.users);
// // // // // // //         } else {
// // // // // // //           console.error("API response not in expected format:", response.data);
// // // // // // //           setError("Data format error. Please check the API response.");
// // // // // // //           setUsers([]);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Failed to fetch users:", err);
// // // // // // //         setError("Failed to connect to the server. Please check your network.");
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchUsers();
// // // // // // //   }, [refreshKey]);

// // // // // // //   const handleDelete = async (userId) => {
// // // // // // //     if (window.confirm("Are you sure you want to delete this user?")) {
// // // // // // //       try {
// // // // // // //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// // // // // // //         toast.success("User deleted successfully!");
// // // // // // //         setRefreshKey((prevKey) => prevKey + 1);
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Failed to delete user:", err);
// // // // // // //         toast.error("Failed to delete user. Please try again.");
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEdit = (user) => {
// // // // // // //     console.log("Edit button was clicked.");
// // // // // // //     console.log("User data to be edited:", user);
// // // // // // //     setEditingUser(user);
// // // // // // //   };

// // // // // // //   // New function to handle the API call and form submission
// // // // // // //   const handleUpdateUser = async (updatedData) => {
// // // // // // //     try {
// // // // // // //       await axios.put(
// // // // // // //         `${backendBaseUrl}/api/update-user/${editingUser._id}`,
// // // // // // //         updatedData
// // // // // // //       );
// // // // // // //       toast.success("User updated successfully!");
// // // // // // //       setEditingUser(null);
// // // // // // //       setRefreshKey((prevKey) => prevKey + 1);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Failed to update user:", error);
// // // // // // //       toast.error("Failed to update user. Please try again.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const filteredUsers =
// // // // // // //     users?.filter(
// // // // // // //       (user) =>
// // // // // // //         `${user.firstName} ${user.lastName}`
// // // // // // //           .toLowerCase()
// // // // // // //           .includes(searchTerm.toLowerCase()) ||
// // // // // // //         user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // // //     ) || [];

// // // // // // //   if (users === null) {
// // // // // // //     return (
// // // // // // //       <div className="text-center py-4 text-blueGray-500">
// // // // // // //         <p>Loading user list...</p>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (error) {
// // // // // // //     return (
// // // // // // //       <div className="text-center py-4 text-red-500">
// // // // // // //         <p>Error: {error}</p>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // // // // // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // // // // // //           <div className="flex flex-wrap items-center">
// // // // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // // // // // //               <h3 className="font-semibold text-base text-blueGray-700">
// // // // // // //                 User List
// // // // // // //               </h3>
// // // // // // //             </div>
// // // // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="Search by name or email..."
// // // // // // //                 value={searchTerm}
// // // // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // // //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="block w-full overflow-x-auto">
// // // // // // //           <table className="items-center w-full bg-transparent border-collapse">
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // //                   Full Name
// // // // // // //                 </th>
// // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // //                   Email Address
// // // // // // //                 </th>
// // // // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // // // //                   Actions
// // // // // // //                 </th>
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               {filteredUsers.length > 0 ? (
// // // // // // //                 filteredUsers.map((user) => (
// // // // // // //                   <tr key={user._id}>
// // // // // // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // // // // // //                       {user.firstName} {user.lastName}
// // // // // // //                     </th>
// // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // //                       {user.email}
// // // // // // //                     </td>
// // // // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // // // //                       <div className="flex">
// // // // // // //                         <button
// // // // // // //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// // // // // // //                           type="button"
// // // // // // //                           // onClick={() => handleEdit(user)}
// // // // // // //                           onClick={(e) => {
// // // // // // //                             e.stopPropagation(); // Stops the click from bubbling up
// // // // // // //                             handleEdit(user);
// // // // // // //                           }}
// // // // // // //                         >
// // // // // // //                           Edit
// // // // // // //                         </button>
// // // // // // //                         <button
// // // // // // //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // // // //                           type="button"
// // // // // // //                           onClick={() => handleDelete(user._id)}
// // // // // // //                         >
// // // // // // //                           Delete
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 ))
// // // // // // //               ) : (
// // // // // // //                 <tr>
// // // // // // //                   <td colSpan="3" className="text-center p-4">
// // // // // // //                     No users found.
// // // // // // //                   </td>
// // // // // // //                 </tr>
// // // // // // //               )}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       {editingUser && (
// // // // // // //         <EditUserModal onClose={() => setEditingUser(null)}>
// // // // // // //           <EditUserForm
// // // // // // //             user={editingUser}
// // // // // // //             onUpdate={handleUpdateUser}
// // // // // // //             onCancel={() => setEditingUser(null)}
// // // // // // //           />
// // // // // // //         </EditUserModal>
// // // // // // //       )}
// // // // // // //       {/* {editingUser && (
// // // // // // //         <EditUserModal onClose={() => setEditingUser(null)}>
// // // // // // //           <div>
// // // // // // //             <p>The modal container is working!</p>
// // // // // // //             <button onClick={() => setEditingUser(null)}>Close</button>
// // // // // // //           </div>
// // // // // // //         </EditUserModal>
// // // // // // //       )} */}
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "axios";
// // // // // // import { toast } from "react-toastify";
// // // // // // import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// // // // // // import EditUserModal from "../Modals/EditUserModal";
// // // // // // import EditUserForm from "../Forms/EditUserForm";


// // // // // // const CardUserList = () => {
// // // // // //   const [users, setUsers] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [editingUser, setEditingUser] = useState(null);
// // // // // //   const [refreshKey, setRefreshKey] = useState(0);

// // // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // // //   useEffect(() => {
// // // // // //     const fetchUsers = async () => {
// // // // // //       setLoading(true);
// // // // // //       setError(null);
// // // // // //       try {
// // // // // //         const response = await axios.get(`${backendBaseUrl}/api/get-all-users`);
// // // // // //         setUsers(response.data.users);
// // // // // //       } catch (err) {
// // // // // //         setError("Failed to fetch users.");
// // // // // //         console.error("Failed to fetch users:", err);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUsers();
// // // // // //   }, [refreshKey]);

// // // // // //   const handleDeleteUser = async (userId) => {
// // // // // //     if (window.confirm("Are you sure you want to delete this user?")) {
// // // // // //       try {
// // // // // //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// // // // // //         toast.success("User deleted successfully!");
// // // // // //         setRefreshKey((prevKey) => prevKey + 1);
// // // // // //       } catch (error) {
// // // // // //         console.error("Failed to delete user:", error);
// // // // // //         toast.error("Failed to delete user. Please try again.");
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEdit = (user) => {
// // // // // //     console.log("Edit button clicked. User data:", user);
// // // // // //     setEditingUser(user);
// // // // // //   };

// // // // // //   const handleUpdateUser = async (updatedData) => {
// // // // // //     // --- START: Debugging code for 'undefined' user ID ---
// // // // // //     console.log("Attempting to update user with data:", updatedData);
// // // // // //     console.log("Editing user object is:", editingUser);
    
// // // // // //     // Check for the user ID before making the request
// // // // // //     const userId = editingUser?._id;
// // // // // //     if (!userId) {
// // // // // //         console.error("User ID is missing! Cannot update.");
// // // // // //         toast.error("User ID is missing. Please try again.");
// // // // // //         return; // Stop the function here
// // // // // //     }
// // // // // //     // --- END: Debugging code ---
    
// // // // // //     try {
// // // // // //       await axios.put(`${backendBaseUrl}/api/update-user/${userId}`, updatedData);
// // // // // //       toast.success("User updated successfully!");
// // // // // //       setEditingUser(null);
// // // // // //       setRefreshKey((prevKey) => prevKey + 1);
// // // // // //     } catch (error) {
// // // // // //       console.error("Failed to update user:", error);
// // // // // //       toast.error("Failed to update user. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) return <div className="text-center p-4">Loading users...</div>;
// // // // // //   if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {users.map((user) => (
// // // // // //           <div
// // // // // //             key={user._id}
// // // // // //             className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
// // // // // //           >
// // // // // //             <div className="text-center mb-4">
// // // // // //               <h2 className="text-xl font-semibold text-gray-800">
// // // // // //                 {user.firstName} {user.lastName}
// // // // // //               </h2>
// // // // // //               <p className="text-gray-600">{user.email}</p>
// // // // // //             </div>
// // // // // //             <div className="flex space-x-4">
// // // // // //               <button
// // // // // //                 onClick={() => handleEdit(user)}
// // // // // //                 className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition duration-300"
// // // // // //                 aria-label="Edit User"
// // // // // //               >
// // // // // //                 <AiOutlineEdit />
// // // // // //                 <span>Edit</span>
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => handleDeleteUser(user._id)}
// // // // // //                 className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition duration-300"
// // // // // //                 aria-label="Delete User"
// // // // // //               >
// // // // // //                 <AiOutlineDelete />
// // // // // //                 <span>Delete</span>
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {editingUser && (
// // // // // //         <EditUserModal onClose={() => setEditingUser(null)}>
// // // // // //           <EditUserForm
// // // // // //             user={editingUser}
// // // // // //             onUpdate={handleUpdateUser}
// // // // // //             onCancel={() => setEditingUser(null)}
// // // // // //           />
// // // // // //         </EditUserModal>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CardUserList;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import { toast } from "react-toastify";

// // // // // // The component now accepts an 'onEdit' prop from its parent
// // // // // export default function CardUserList({ onEdit }) {
// // // // //   const [users, setUsers] = useState(null);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [refreshKey, setRefreshKey] = useState(0);

// // // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // // //   useEffect(() => {
// // // // //     const fetchUsers = async () => {
// // // // //       try {
// // // // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// // // // //         const response = await axios.get(apiUrl);
        
// // // // //         if (response.data && Array.isArray(response.data.users)) {
// // // // //           setUsers(response.data.users);
// // // // //         } else {
// // // // //           console.error("API response not in expected format:", response.data);
// // // // //           setError("Data format error. Please check the API response.");
// // // // //           setUsers([]);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Failed to fetch users:", err);
// // // // //         setError("Failed to connect to the server. Please check your network.");
// // // // //       }
// // // // //     };
// // // // //     fetchUsers();
// // // // //   }, [refreshKey]);

// // // // //   const handleDelete = async (userId) => {
// // // // //     if (window.confirm("Are you sure you want to delete this user?")) {
// // // // //       try {
// // // // //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// // // // //         toast.success("User deleted successfully!");
// // // // //         setRefreshKey(prevKey => prevKey + 1);
// // // // //       } catch (err) {
// // // // //         console.error("Failed to delete user:", err);
// // // // //         toast.error("Failed to delete user. Please try again.");
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleEdit = (user) => {
// // // // //     setEditingUser(user);
// // // // //   };
  
// // // // //   // New function to handle the API call and form submission
// // // // //   const handleUpdateUser = async (updatedData) => {
// // // // //     // Check what's being passed
// // // // //     console.log("Attempting to update user with data:", updatedData);
// // // // //     console.log("Editing user object is:", editingUser);
    
// // // // //     // Check the ID before making the request
// // // // //     const userId = editingUser?._id;
// // // // //     if (!userId) {
// // // // //         console.error("User ID is missing!");
// // // // //         toast.error("User ID is missing. Cannot update.");
// // // // //         return; // Stop the function here
// // // // //     }
// // // // //     try {
// // // // //       await axios.put(`${backendBaseUrl}/api/update-user/${editingUser._id}`, updatedData);
// // // // //       toast.success("User updated successfully!");
// // // // //       setEditingUser(null);
// // // // //       setRefreshKey(prevKey => prevKey + 1);
// // // // //     } catch (error) {
// // // // //       console.error("Failed to update user:", error);
// // // // //       toast.error("Failed to update user. Please try again.");
// // // // //     }
// // // // //   };

// // // // //   const filteredUsers = users?.filter(user =>
// // // // //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   ) || [];

// // // // //   if (users === null) {
// // // // //     return (
// // // // //       <div className="text-center py-4 text-blueGray-500">
// // // // //         <p>Loading user list...</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="text-center py-4 text-red-500">
// // // // //         <p>Error: {error}</p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // // // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // // // //           <div className="flex flex-wrap items-center">
// // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // // // //               <h3 className="font-semibold text-base text-blueGray-700">User List</h3>
// // // // //             </div>
// // // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search by name or email..."
// // // // //                 value={searchTerm}
// // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="block w-full overflow-x-auto">
// // // // //           <table className="items-center w-full bg-transparent border-collapse">
// // // // //             <thead>
// // // // //               <tr>
// // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // //                   Full Name
// // // // //                 </th>
// // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // //                   Email Address
// // // // //                 </th>
// // // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // // //                   Actions
// // // // //                 </th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {filteredUsers.length > 0 ? (
// // // // //                 filteredUsers.map((user) => (
// // // // //                   <tr key={user._id}>
// // // // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // // // //                       {user.firstName} {user.lastName}
// // // // //                     </th>
// // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // //                       {user.email}
// // // // //                     </td>
// // // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // // //                       <div className="flex">
// // // // //                         <button
// // // // //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// // // // //                           type="button"
// // // // //                           // Calls the onEdit prop with the user data
// // // // //                           onClick={() => onEdit(user)}
// // // // //                         >
// // // // //                           Edit
// // // // //                         </button>
// // // // //                         <button
// // // // //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // // //                           type="button"
// // // // //                           onClick={() => handleDelete(user._id)}
// // // // //                         >
// // // // //                           Delete
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 ))
// // // // //               ) : (
// // // // //                 <tr>
// // // // //                   <td colSpan="3" className="text-center p-4">
// // // // //                     No users found.
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               )}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { toast } from "react-toastify";

// // // // // The component now accepts an 'onEdit' prop from its parent
// // // // export default function CardUserList({ onEdit }) {
// // // //   const [users, setUsers] = useState(null);
// // // //   const [error, setError] = useState(null);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [refreshKey, setRefreshKey] = useState(0);

// // // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// // // //         const response = await axios.get(apiUrl);
        
// // // //         if (response.data && Array.isArray(response.data.users)) {
// // // //           setUsers(response.data.users);
// // // //         } else {
// // // //           console.error("API response not in expected format:", response.data);
// // // //           setError("Data format error. Please check the API response.");
// // // //           setUsers([]);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to fetch users:", err);
// // // //         setError("Failed to connect to the server. Please check your network.");
// // // //       }
// // // //     };
// // // //     fetchUsers();
// // // //   }, [refreshKey]);

// // // //   const handleDelete = async (userId) => {
// // // //     if (window.confirm("Are you sure you want to delete this user?")) {
// // // //       try {
// // // //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// // // //         toast.success("User deleted successfully!");
// // // //         setRefreshKey(prevKey => prevKey + 1);
// // // //       } catch (err) {
// // // //         console.error("Failed to delete user:", err);
// // // //         toast.error("Failed to delete user. Please try again.");
// // // //       }
// // // //     }
// // // //   };

// // // //   const filteredUsers = users?.filter(user =>
// // // //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   ) || [];

// // // //   if (users === null) {
// // // //     return (
// // // //       <div className="text-center py-4 text-blueGray-500">
// // // //         <p>Loading user list...</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="text-center py-4 text-red-500">
// // // //         <p>Error: {error}</p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // // //           <div className="flex flex-wrap items-center">
// // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // // //               <h3 className="font-semibold text-base text-blueGray-700">User List</h3>
// // // //             </div>
// // // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search by name or email..."
// // // //                 value={searchTerm}
// // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //         <div className="block w-full overflow-x-auto">
// // // //           <table className="items-center w-full bg-transparent border-collapse">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // //                   Full Name
// // // //                 </th>
// // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // //                   Email Address
// // // //                 </th>
// // // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // // //                   Actions
// // // //                 </th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {filteredUsers.length > 0 ? (
// // // //                 filteredUsers.map((user) => (
// // // //                   <tr key={user._id}>
// // // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // // //                       {user.firstName} {user.lastName}
// // // //                     </th>
// // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // //                       {user.email}
// // // //                     </td>
// // // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // // //                       <div className="flex">
// // // //                         <button
// // // //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// // // //                           type="button"
// // // //                           onClick={() => onEdit(user)}
// // // //                         >
// // // //                           Edit
// // // //                         </button>
// // // //                         <button
// // // //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // // //                           type="button"
// // // //                           onClick={() => handleDelete(user._id)}
// // // //                         >
// // // //                           Delete
// // // //                         </button>
// // // //                       </div>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="3" className="text-center p-4">
// // // //                     No users found.
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";
// // // import { FaTimes } from "react-icons/fa";

// // // export default function CardUserList({ onEdit }) {
// // //   const [users, setUsers] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [refreshKey, setRefreshKey] = useState(0);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10;
// // //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// // //   const [userToDeleteId, setUserToDeleteId] = useState(null);

// // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// // //         const response = await axios.get(apiUrl);

// // //         if (response.data && Array.isArray(response.data.users)) {
// // //           setUsers(response.data.users);
// // //           setError(null);
// // //         } else {
// // //           console.error("API response not in expected format:", response.data);
// // //           setError("Data format error. Please check the API response.");
// // //           setUsers([]);
// // //         }
// // //       } catch (err) {
// // //         console.error("Failed to fetch users:", err);
// // //         setError("Failed to connect to the server. Please check your network.");
// // //       }
// // //     };
// // //     fetchUsers();
// // //   }, [refreshKey]);

// // //   const handleDeleteClick = (userId) => {
// // //     setUserToDeleteId(userId);
// // //     setShowDeleteConfirm(true);
// // //   };

// // //   const handleConfirmDelete = async () => {
// // //     try {
// // //       await axios.delete(`${backendBaseUrl}/api/delete-user/${userToDeleteId}`);
// // //       toast.success("User deleted successfully!");
// // //       setRefreshKey(prevKey => prevKey + 1);
// // //       setCurrentPage(1); // Reset to the first page after deletion
// // //     } catch (err) {
// // //       console.error("Failed to delete user:", err);
// // //       toast.error("Failed to delete user. Please try again.");
// // //     } finally {
// // //       setShowDeleteConfirm(false);
// // //       setUserToDeleteId(null);
// // //     }
// // //   };

// // //   const filteredUsers = users?.filter(user =>
// // //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// // //   ) || [];

// // //   const indexOfLastItem = currentPage * itemsPerPage;
// // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // //   const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
// // //   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

// // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // //   if (users === null) {
// // //     return (
// // //       <div className="text-center py-4 text-blueGray-500">
// // //         <p>Loading user list...</p>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="text-center py-4 text-red-500">
// // //         <p>Error: {error}</p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // //           <div className="flex flex-wrap items-center">
// // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // //               <h3 className="font-semibold text-base text-blueGray-700">User List</h3>
// // //             </div>
// // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search by name or email..."
// // //                 value={searchTerm}
// // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="block w-full overflow-x-auto">
// // //           <table className="items-center w-full bg-transparent border-collapse">
// // //             <thead>
// // //               <tr>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   Full Name
// // //                 </th>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   Email Address
// // //                 </th>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   Actions
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {currentUsers.length > 0 ? (
// // //                 currentUsers.map((user) => (
// // //                   <tr key={user._id}>
// // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // //                       {user.firstName} {user.lastName}
// // //                     </th>
// // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                       {user.email}
// // //                     </td>
// // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                       <div className="flex">
// // //                         <button
// // //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// // //                           type="button"
// // //                           onClick={() => onEdit(user)}
// // //                         >
// // //                           Edit
// // //                         </button>
// // //                         <button
// // //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // //                           type="button"
// // //                           onClick={() => handleDeleteClick(user._id)}
// // //                         >
// // //                           Delete
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan="3" className="text-center p-4">
// // //                     No users found.
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //       {/* Pagination */}
// // //       {totalPages > 1 && (
// // //         <div className="flex justify-center mt-4">
// // //           <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
// // //             <button
// // //               onClick={() => paginate(currentPage - 1)}
// // //               disabled={currentPage === 1}
// // //               className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //             >
// // //               Previous
// // //             </button>
// // //             {Array.from({ length: totalPages }, (_, i) => (
// // //               <button
// // //                 key={i + 1}
// // //                 onClick={() => paginate(i + 1)}
// // //                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
// // //                   currentPage === i + 1
// // //                     ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
// // //                     : 'bg-white text-gray-700 hover:bg-gray-50'
// // //                 }`}
// // //               >
// // //                 {i + 1}
// // //               </button>
// // //             ))}
// // //             <button
// // //               onClick={() => paginate(currentPage + 1)}
// // //               disabled={currentPage === totalPages}
// // //               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// // //             >
// // //               Next
// // //             </button>
// // //           </nav>
// // //         </div>
// // //       )}
// // //       {/* Custom Delete Confirmation Modal */}
// // //       {showDeleteConfirm && (
// // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// // //           <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={() => setShowDeleteConfirm(false)}></div>
// // //           <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h3 className="text-xl font-bold">Confirm Deletion</h3>
// // //               <button onClick={() => setShowDeleteConfirm(false)} className="text-gray-500 hover:text-gray-700">
// // //                 <FaTimes />
// // //               </button>
// // //             </div>
// // //             <p>Are you sure you want to delete this user?</p>
// // //             <div className="mt-6 flex justify-end space-x-2">
// // //               <button
// // //                 onClick={handleConfirmDelete}
// // //                 className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // //               >
// // //                 Delete
// // //               </button>
// // //               <button
// // //                 onClick={() => setShowDeleteConfirm(false)}
// // //                 className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// // //               >
// // //                 Cancel
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // export default function CardUserList({ onEdit, loggedInUser }) {
// //   const [users, setUsers] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [refreshKey, setRefreshKey] = useState(0);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;
// //   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
// //   const [userToDeleteId, setUserToDeleteId] = useState(null);

// //   const backendBaseUrl = "https://slu-backend.vercel.app";

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// //         const response = await axios.get(apiUrl);

// //         if (response.data && Array.isArray(response.data.users)) {
// //           setUsers(response.data.users);
// //           setError(null);
// //         } else {
// //           console.error("API response not in expected format:", response.data);
// //           setError("Data format error. Please check the API response.");
// //           setUsers([]);
// //         }
// //       } catch (err) {
// //         console.error("Failed to fetch users:", err);
// //         setError("Failed to connect to the server. Please check your network.");
// //       }
// //     };
// //     fetchUsers();
// //   }, [refreshKey]);

// //   const handleDeleteClick = (userId) => {
// //     setUserToDeleteId(userId);
// //     setShowDeleteConfirm(true);
// //   };

// //   const handleConfirmDelete = async () => {
// //     try {
// //       await axios.delete(`${backendBaseUrl}/api/delete-user/${userToDeleteId}`);
// //       toast.success("User deleted successfully!");
// //       setRefreshKey(prevKey => prevKey + 1);
// //       setCurrentPage(1); // Reset to the first page after deletion
// //     } catch (err) {
// //       console.error("Failed to delete user:", err);
// //       toast.error("Failed to delete user. Please try again.");
// //     } finally {
// //       setShowDeleteConfirm(false);
// //       setUserToDeleteId(null);
// //     }
// //   };

// //   const filteredUsers = users?.filter(user =>
// //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// //   ) || [];

// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
// //   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   if (users === null) {
// //     return (
// //       <div className="text-center py-4 text-blueGray-500">
// //         <p>Loading user list...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="text-center py-4 text-red-500">
// //         <p>Error: {error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
// //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// //           <div className="flex flex-wrap items-center">
// //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// //               <h3 className="font-semibold text-base text-blueGray-700">User List</h3>
// //             </div>
// //             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// //               <input
// //                 type="text"
// //                 placeholder="Search by name or email..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="block w-full overflow-x-auto">
// //           <table className="items-center w-full bg-transparent border-collapse">
// //             <thead>
// //               <tr>
// //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                   Full Name
// //                 </th>
// //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                   Email Address
// //                 </th>
// //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                   Actions
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {currentUsers.length > 0 ? (
// //                 currentUsers.map((user) => (
// //                   <tr key={user._id}>
// //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// //                       {user.firstName} {user.lastName}
// //                     </th>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       {user.email}
// //                     </td>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       <div className="flex">
// //                         <button
// //                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
// //                           type="button"
// //                           onClick={() => onEdit(user)}
// //                         >
// //                           Edit
// //                         </button>
// //                         <button
// //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// //                           type="button"
// //                           onClick={() => handleDeleteClick(user._id)}
// //                         >
// //                           Delete
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan="3" className="text-center p-4">
// //                     No users found.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //       {/* Pagination */}
// //       {totalPages > 1 && (
// //         <div className="flex justify-center mt-4">
// //           <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
// //             <button
// //               onClick={() => paginate(currentPage - 1)}
// //               disabled={currentPage === 1}
// //               className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //             >
// //               Previous
// //             </button>
// //             {Array.from({ length: totalPages }, (_, i) => (
// //               <button
// //                 key={i + 1}
// //                 onClick={() => paginate(i + 1)}
// //                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
// //                   currentPage === i + 1
// //                     ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
// //                     : 'bg-white text-gray-700 hover:bg-gray-50'
// //                 }`}
// //               >
// //                 {i + 1}
// //               </button>
// //             ))}
// //             <button
// //               onClick={() => paginate(currentPage + 1)}
// //               disabled={currentPage === totalPages}
// //               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
// //             >
// //               Next
// //             </button>
// //           </nav>
// //         </div>
// //       )}
// //       {/* Custom Delete Confirmation Modal */}
// //       {showDeleteConfirm && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //           <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={() => setShowDeleteConfirm(false)}></div>
// //           <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-xl font-bold">Confirm Deletion</h3>
// //               <button onClick={() => setShowDeleteConfirm(false)} className="text-gray-500 hover:text-gray-700">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                   strokeWidth={2}
// //                 >
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>
// //             </div>
// //             <p>Are you sure you want to delete this user?</p>
// //             <div className="mt-6 flex justify-end space-x-2">
// //               <button
// //                 onClick={handleConfirmDelete}
// //                 className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// //               >
// //                 Delete
// //               </button>
// //               <button
// //                 onClick={() => setShowDeleteConfirm(false)}
// //                 className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// // Now, accept 'loggedInUser' as a prop
// export default function CardUserList({ onEdit, loggedInUser }) {
//   const [users, setUsers] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [userToDeleteId, setUserToDeleteId] = useState(null);

//   const backendBaseUrl = "https://slu-backend.vercel.app";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
//         const response = await axios.get(apiUrl);

//         if (response.data && Array.isArray(response.data.users)) {
//           setUsers(response.data.users);
//           setError(null);
//         } else {
//           console.error("API response not in expected format:", response.data);
//           setError("Data format error. Please check the API response.");
//           setUsers([]);
//         }
//       } catch (err) {
//         console.error("Failed to fetch users:", err);
//         setError("Failed to connect to the server. Please check your network.");
//       }
//     };
//     fetchUsers();
//   }, [refreshKey]);

//   const handleDeleteClick = (userId) => {
//     setUserToDeleteId(userId);
//     setShowDeleteConfirm(true);
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       await axios.delete(`${backendBaseUrl}/api/delete-user/${userToDeleteId}`);
//       toast.success("User deleted successfully!");
//       setRefreshKey((prevKey) => prevKey + 1);
//       setCurrentPage(1);
//     } catch (err) {
//       console.error("Failed to delete user:", err);
//       toast.error("Failed to delete user. Please try again.");
//     } finally {
//       setShowDeleteConfirm(false);
//       setUserToDeleteId(null);
//     }
//   };

//   const filteredUsers =
//     users?.filter(
//       (user) =>
//         `${user.firstName} ${user.lastName}`
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     ) || [];

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (users === null) {
//     return (
//       <div className="text-center py-4 text-blueGray-500">
//         <p>Loading user list...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-4 text-red-500">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }
  
//   // Guard clause to handle cases where loggedInUser is not yet available
//   if (!loggedInUser) {
//     return null;
//   }

//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3 className="font-semibold text-base text-blueGray-700">
//                 User List
//               </h3>
//             </div>
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//               <input
//                 type="text"
//                 placeholder="Search by name or email..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="block w-full overflow-x-auto">
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   Full Name
//                 </th>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   Email Address
//                 </th>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.length > 0 ? (
//                 currentUsers.map((user) => {
//                   const isEditEnabled = loggedInUser.isAdmin || loggedInUser._id === user._id;

//                   return (
//                     <tr key={user._id}>
//                       <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                         {user.firstName} {user.lastName}
//                       </th>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {user.email}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         <div className="flex">
//                           <button
//                             className={`
//                               font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2
//                               ${
//                                 isEditEnabled
//                                   ? "bg-lightBlue-500 text-white active:bg-lightBlue-600"
//                                   : "bg-gray-400 text-gray-700 cursor-not-allowed"
//                               }
//                             `}
//                             type="button"
//                             onClick={() => onEdit(user)}
//                             disabled={!isEditEnabled}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
//                             type="button"
//                             onClick={() => handleDeleteClick(user._id)}
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="text-center p-4">
//                     No users found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-4">
//           <nav
//             className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//             aria-label="Pagination"
//           >
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => paginate(i + 1)}
//                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
//                   currentPage === i + 1
//                     ? "bg-indigo-50 border-indigo-500 text-indigo-600"
//                     : "bg-white text-gray-700 hover:bg-gray-50"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               Next
//             </button>
//           </nav>
//         </div>
//       )}
//       {/* Custom Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="fixed inset-0 bg-gray-900 opacity-50"
//             onClick={() => setShowDeleteConfirm(false)}
//           ></div>
//           <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">Confirm Deletion</h3>
//               <button
//                 onClick={() => setShowDeleteConfirm(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <p>Are you sure you want to delete this user?</p>
//             <div className="mt-6 flex justify-end space-x-2">
//               <button
//                 onClick={handleConfirmDelete}
//                 className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setShowDeleteConfirm(false)}
//                 className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CardUserList({ onEdit, loggedInUser }) {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userToDeleteId, setUserToDeleteId] = useState(null);

  const backendBaseUrl = "https://slu-backend.vercel.app";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
        const response = await axios.get(apiUrl);

        if (response.data && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
          setError(null);
        } else {
          console.error("API response not in expected format:", response.data);
          setError("Data format error. Please check the API response.");
          setUsers([]);
        }
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to connect to the server. Please check your network.");
      }
    };
    fetchUsers();
  }, [refreshKey]);

  const handleDeleteClick = (userId) => {
    setUserToDeleteId(userId);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${backendBaseUrl}/api/delete-user/${userToDeleteId}`);
      toast.success("User deleted successfully!");
      setRefreshKey((prevKey) => prevKey + 1);
      setCurrentPage(1);
    } catch (err) {
      console.error("Failed to delete user:", err);
      toast.error("Failed to delete user. Please try again.");
    } finally {
      setShowDeleteConfirm(false);
      setUserToDeleteId(null);
    }
  };

  const filteredUsers =
    users?.filter(
      (user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (users === null) {
    return (
      <div className="text-center py-4 text-blueGray-500">
        <p>Loading user list...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }
  
  // Guard clause to handle cases where loggedInUser is not yet available
  if (!loggedInUser) {
    return null;
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                User List
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Full Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email Address
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => {
                  const isEditEnabled = loggedInUser.isAdmin || loggedInUser._id === user._id;
                  const isDeleteEnabled = loggedInUser.isSuperAdmin;

                  return (
                    <tr key={user._id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {user.firstName} {user.lastName}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {user.email}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex">
                          <button
                            className={`
                              font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2
                              ${
                                isEditEnabled
                                  ? "bg-lightBlue-500 text-white active:bg-lightBlue-600"
                                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
                              }
                            `}
                            type="button"
                            onClick={() => onEdit(user)}
                            disabled={!isEditEnabled}
                          >
                            Edit
                          </button>
                          <button
                            className={`
                               font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150
                               ${
                                 isDeleteEnabled
                                   ? "bg-red-500 text-white active:bg-red-600"
                                   : "bg-gray-400 text-gray-700 cursor-not-allowed"
                               }
                             `}
                            type="button"
                            onClick={() => handleDeleteClick(user._id)}
                            disabled={!isDeleteEnabled}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-indigo-50 border-indigo-500 text-indigo-600"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        </div>
      )}
      {/* Custom Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-gray-900 opacity-50"
            onClick={() => setShowDeleteConfirm(false)}
          ></div>
          <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Confirm Deletion</h3>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}