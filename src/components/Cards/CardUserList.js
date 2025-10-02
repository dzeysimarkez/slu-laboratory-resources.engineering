// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// // 1. ACCEPT THE NEW PROP: onAddUser
// export default function CardUserList({ onEdit, loggedInUser, onAddUser }) {
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
          
//           {/* Main row: Three-column layout for Title (Left), Search (Center), Button (Right) */}
//           <div className="flex flex-wrap items-center">

//             {/* 1. LEFT COLUMN: Title - takes 1/4 width (adjust as needed) */}
//             <div className="relative w-1/4 px-4 max-w-full flex-grow flex-1">
//               <h3 className="font-semibold text-base text-blueGray-700">
//                 User List
//               </h3>
//             </div>

//             {/* 2. CENTER COLUMN: Search Input - takes 1/2 width to be centered */}
//             <div className="relative w-1/2 px-4 max-w-full flex-grow flex-1 text-center">
//               <input
//                 type="text"
//                 placeholder="Search by name or email..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 // w-full ensures the input fills its container width
//                 className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
//               />
//             </div>

//             {/* 3. RIGHT COLUMN: Add New User Button - takes 1/4 width, text-right pushes button to the edge */}
//             <div className="relative w-1/4 px-4 max-w-full flex-grow flex-1 text-right">
//               {loggedInUser.isSuperAdmin && (
//                 <button
//                   // Green color (bg-emerald-500) applied as requested
//                   className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
//                   type="button"
//                   onClick={onAddUser}
//                 >
//                   Add New User
//                 </button>
//               )}
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
//                   const isDeleteEnabled = loggedInUser.isSuperAdmin;

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
//                               ${isEditEnabled
//                                 ? "bg-lightBlue-500 text-white active:bg-lightBlue-600"
//                                 : "bg-gray-400 text-gray-700 cursor-not-allowed"
//                               }
//                             `}
//                             type="button"
//                             onClick={() => onEdit(user)}
//                             disabled={!isEditEnabled}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className={`
//                                font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150
//                                ${isDeleteEnabled
//                                 ? "bg-red-500 text-white active:bg-red-600"
//                                 : "bg-gray-400 text-gray-700 cursor-not-allowed"
//                               }
//                               `}
//                             type="button"
//                             onClick={() => handleDeleteClick(user._id)}
//                             disabled={!isDeleteEnabled}
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
//                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${currentPage === i + 1
//                     ? "bg-indigo-50 border-indigo-500 text-indigo-600"
//                     : "bg-white text-gray-700 hover:bg-gray-50"
//                   }`}
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

// The email of the default user you want to hide and prevent from being deleted
const ADMIN_USER_EMAIL_TO_EXCLUDE = "admin@user";

export default function CardUserList({ onEdit, loggedInUser, onAddUser }) {
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
        // 1. **EXCLUDE ADMIN USER:** Filter out the specific admin user email
        user.email.toLowerCase() !== ADMIN_USER_EMAIL_TO_EXCLUDE &&
        // 2. **APPLY SEARCH TERM:** Apply the search filter logic
        (
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
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
          
          {/* Main row: Three-column layout for Title (Left), Search (Center), Button (Right) */}
          <div className="flex flex-wrap items-center">

            {/* 1. LEFT COLUMN: Title - takes 1/4 width (adjust as needed) */}
            <div className="relative w-1/4 px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                User List
              </h3>
            </div>

            {/* 2. CENTER COLUMN: Search Input - takes 1/2 width to be centered */}
            <div className="relative w-1/2 px-4 max-w-full flex-grow flex-1 text-center">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // w-full ensures the input fills its container width
                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
              />
            </div>

            {/* 3. RIGHT COLUMN: Add New User Button - takes 1/4 width, text-right pushes button to the edge */}
            <div className="relative w-1/4 px-4 max-w-full flex-grow flex-1 text-right">
              {loggedInUser.isSuperAdmin && (
                <button
                  // Green color (bg-emerald-500) applied as requested
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={onAddUser}
                >
                  Add New User
                </button>
              )}
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
                  // **LOGIC UPDATE**: Delete is enabled only for SuperAdmin AND if the user is NOT the excluded admin email.
                  const isDeleteEnabled = loggedInUser.isSuperAdmin && user.email.toLowerCase() !== ADMIN_USER_EMAIL_TO_EXCLUDE;

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
                              ${isEditEnabled
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
                          
                          {/* **LOGIC CHANGE**: CONDITIONAL RENDERING (Hidden) instead of disabled */}
                          {isDeleteEnabled && (
                            <button
                              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => handleDeleteClick(user._id)}
                            >
                              Delete
                            </button>
                          )}
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
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${currentPage === i + 1
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