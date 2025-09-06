// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // export default function CardUserList() {
// // //   const [users, setUsers] = useState(null); // Initialize with null to track loading
// // //   const [error, setError] = useState(null);
  
// // //   // Define the base URL for your backend API
// // //   const backendBaseUrl = "https://slu-backend.vercel.app";

// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         // Construct the full, absolute URL
// // //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;

// // //         // Make the API call with the correct absolute URL
// // //         const response = await axios.get(apiUrl);
        
// // //         // Defensive check to ensure response.data and response.data.users exist
// // //         if (response.data && Array.isArray(response.data.users)) {
// // //           setUsers(response.data.users);
// // //         } else {
// // //           // If the data is not in the expected format, treat it as an error
// // //           console.error("API response not in expected format:", response.data);
// // //           setError("Data format error. Please check the API response.");
// // //           setUsers([]);
// // //         }

// // //       } catch (err) {
// // //         console.error("Failed to fetch users:", err);
// // //         setError("Failed to connect to the server. Please check your network.");
// // //       }
// // //     }

// // //     fetchUsers();
// // //   }, []);

// // //   // Show a loading state while fetching data
// // //   if (users === null) {
// // //     return (
// // //       <div className="text-center py-4 text-blueGray-500">
// // //         <p>Loading user list...</p>
// // //       </div>
// // //     );
// // //   }

// // //   // Handle a fetch error
// // //   if(error) {
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
// // //               <h3 className="font-semibold text-base text-blueGray-700">
// // //                 User List
// // //               </h3>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="block w-full overflow-x-auto">
// // //           {/* Projects table */}
// // //           <table className="items-center w-full bg-transparent border-collapse">
// // //             <thead>
// // //               <tr>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   Name
// // //                 </th>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   User Name
// // //                 </th>
// // //                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// // //                   Email Address
// // //                 </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.length > 0 ? (
// // //                 users.map((user) => (
// // //                   <tr key={user._id}>
// // //                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
// // //                       {user.firstName} {user.lastName}
// // //                     </th>
// // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                       {user.username}
// // //                     </td>
// // //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                       {user.email}
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
// // //     </>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import EditUserModal from "components/Modals/EditUserModal";
// // import EditUserForm from "components/Forms/EditUserForm";

// // export default function CardUserList() {
// //   const [users, setUsers] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [refreshKey, setRefreshKey] = useState(0);
// //   const [editingUser, setEditingUser] = useState(null); // State to hold the user being edited
  
// //   const backendBaseUrl = "https://slu-backend.vercel.app";

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
// //         const response = await axios.get(apiUrl);
        
// //         if (response.data && Array.isArray(response.data.users)) {
// //           setUsers(response.data.users);
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

// //   const handleDelete = async (userId) => {
// //     if (window.confirm("Are you sure you want to delete this user?")) {
// //       try {
// //         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
// //         toast.success("User deleted successfully!");
// //         setRefreshKey(prevKey => prevKey + 1);
// //       } catch (err) {
// //         console.error("Failed to delete user:", err);
// //         toast.error("Failed to delete user. Please try again.");
// //       }
// //     }
// //   };

// //   const handleEdit = (user) => {
// //     setEditingUser(user); // Set the state to the user object to be edited
// //   };

// //   const handleEditCancel = () => {
// //     setEditingUser(null); // Close the modal by clearing the editing state
// //   };

// //   const handleEditSuccess = () => {
// //     setEditingUser(null); // Close the modal
// //     setRefreshKey(prevKey => prevKey + 1); // Force a refresh of the user list
// //   };

// //   const filteredUsers = users?.filter(user =>
// //     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     user.email.toLowerCase().includes(searchTerm.toLowerCase())
// //   ) || [];

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
// //         {/* ... (rest of the table and search bar JSX) ... */}
// //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// //           <div className="flex flex-wrap items-center">
// //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// //               <h3 className="font-semibold text-base text-blueGray-700">
// //                 User List
// //               </h3>
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
// //               {filteredUsers.length > 0 ? (
// //                 filteredUsers.map((user) => (
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
// //                           onClick={() => handleEdit(user)}
// //                         >
// //                           Edit
// //                         </button>
// //                         <button
// //                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
// //                           type="button"
// //                           onClick={() => handleDelete(user._id)}
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
// //       {/* Conditionally render the modal */}
// //       {editingUser && (
// //         <EditUserModal onClose={handleEditCancel}>
// //           <EditUserForm
// //             user={editingUser}
// //             onCancel={handleEditCancel}
// //             onSuccess={handleEditSuccess}
// //           />
// //         </EditUserModal>
// //       )}
// //     </>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import EditUserModal from "../Modals/EditUserModal"; 
// import EditUserForm from "../Forms/EditUserForm";

// export default function CardUserList() {
//   const [users, setUsers] = useState(null);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [editingUser, setEditingUser] = useState(null);
  
//   const backendBaseUrl = "https://slu-backend.vercel.app";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
//         const response = await axios.get(apiUrl);
        
//         if (response.data && Array.isArray(response.data.users)) {
//           setUsers(response.data.users);
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

//   const handleDelete = async (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
//         toast.success("User deleted successfully!");
//         setRefreshKey(prevKey => prevKey + 1);
//       } catch (err) {
//         console.error("Failed to delete user:", err);
//         toast.error("Failed to delete user. Please try again.");
//       }
//     }
//   };

//   const handleEdit = (user) => {
//     setEditingUser(user);
//   };
  
//   // New function to handle the API call and form submission
//   const handleUpdateUser = async (updatedData) => {
//     try {
//       await axios.put(`${backendBaseUrl}/api/update-user/${editingUser._id}`, updatedData);
//       toast.success("User updated successfully!");
//       setEditingUser(null);
//       setRefreshKey(prevKey => prevKey + 1);
//     } catch (error) {
//       console.error("Failed to update user:", error);
//       toast.error("Failed to update user. Please try again.");
//     }
//   };

//   const filteredUsers = users?.filter(user =>
//     `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   ) || [];

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
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr key={user._id}>
//                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                       {user.firstName} {user.lastName}
//                     </th>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       {user.email}
//                     </td>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       <div className="flex">
//                         <button
//                           className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
//                           type="button"
//                           onClick={() => handleEdit(user)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
//                           type="button"
//                           onClick={() => handleDelete(user._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
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
//       {editingUser && (
//         <EditUserModal onClose={() => setEditingUser(null)}>
//           <EditUserForm
//             user={editingUser}
//             onUpdate={handleUpdateUser}
//             onCancel={() => setEditingUser(null)}
//           />
//         </EditUserModal>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const backendBaseUrl = "https://slu-backend.vercel.app";

const CardUserList = ({ onEdit, onDelete, refreshKey }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 5;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`${backendBaseUrl}/api/users`);

        if (response.data.success) {
          setUsers(response.data.data);
          setError(null);
        } else {
          throw new Error(response.data.msg || "Failed to fetch users.");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
        toast.error("Failed to load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [refreshKey]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white p-6">
        <p className="text-center text-gray-600 font-bold">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white p-6">
        <p className="text-center text-red-600 font-bold">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">
                User List
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded-lg text-sm border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"
              />
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Email
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Role
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.role}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex">
                        <button
                          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
                          type="button"
                          onClick={() => onEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => onDelete(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
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
                    ? 'bg-blue-50 border-blue-500 text-blue-600'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
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
    </>
  );
};

export default CardUserList;
