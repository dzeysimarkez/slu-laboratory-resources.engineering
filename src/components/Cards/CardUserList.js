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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditUserModal from "../Modals/EditUserModal";
import EditUserForm from "../Forms/EditUserForm";

export default function CardUserList() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [editingUser, setEditingUser] = useState(null);

  const backendBaseUrl = "https://slu-backend.vercel.app";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const apiUrl = `${backendBaseUrl}/api/get-all-users?_t=${new Date().getTime()}`;
        const response = await axios.get(apiUrl);

        if (response.data && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
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

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${backendBaseUrl}/api/delete-user/${userId}`);
        toast.success("User deleted successfully!");
        setRefreshKey((prevKey) => prevKey + 1);
      } catch (err) {
        console.error("Failed to delete user:", err);
        toast.error("Failed to delete user. Please try again.");
      }
    }
  };

  const handleEdit = (user) => {
    console.log("Edit button was clicked.");
    console.log("User data to be edited:", user);
    setEditingUser(user);
  };

  // New function to handle the API call and form submission
  const handleUpdateUser = async (updatedData) => {
    try {
      await axios.put(
        `${backendBaseUrl}/api/update-user/${editingUser._id}`,
        updatedData
      );
      toast.success("User updated successfully!");
      setEditingUser(null);
      setRefreshKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user. Please try again.");
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
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
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
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 mr-2"
                          type="button"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          // onClick={() => handleDelete(user._id)}
                          onClick={(e) => {
                            e.stopPropagation(); // Stops the click from bubbling up
                            handleEdit(user);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
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
      {editingUser && (
        <EditUserModal onClose={() => setEditingUser(null)}>
          <EditUserForm
            user={editingUser}
            onUpdate={handleUpdateUser}
            onCancel={() => setEditingUser(null)}
          />
        </EditUserModal>
      )}
      {/* {editingUser && (
        <EditUserModal onClose={() => setEditingUser(null)}>
          <div>
            <p>The modal container is working!</p>
            <button onClick={() => setEditingUser(null)}>Close</button>
          </div>
        </EditUserModal>
      )} */}
    </>
  );
}
