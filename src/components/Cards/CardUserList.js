// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // components

// export default function CardUserList() {

//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("/api/users");
//         setUsers(response.data.users);
//       } catch (err) {
//         setError(err);
//       }
//     }

//     fetchUsers();
//   }, []);

//   if(error) {
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
//               {/* <button
//                 className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//               >
//                 See all
//               </button> */}
//             </div>
//           </div>
//         </div>
//         <div className="block w-full overflow-x-auto">
//           {/* Projects table */}
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   Name
//                 </th>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   User Name
//                 </th>
//                 <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                   Email Address
//                 </th>
//               </tr>
//             </thead>
//             <tbody>

//               {users.length > 0 ? (
//                 users.map((user) => (
//                   <tr>
//                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                       {user.firstName} {user.lastName}
//                     </th>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       jjjjcccc
//                     </td>
//                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       {user.email}
//                     </td>
//                   </tr>
//                 )
//                 )) : (<tr>
//                   <td colSpan="3" className="text-center p-4">No users found.</td>
//                 </tr>)
//               }

//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardUserList() {

  const [users, setUsers] = useState(null); // Initialize with null to track loading
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/get-all-users");
        
        // Defensive check to ensure response.data and response.data.users exist
        if (response.data && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          // If the data is not in the expected format, treat it as an error
          console.error("API response not in expected format:", response.data);
          setError("Data format error. Please check the API response.");
          setUsers([]);
        }

      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to connect to the server. Please check your network.");
      }
    }

    fetchUsers();
  }, []);

  // Show a loading state while fetching data
  if (users === null) {
    return (
      <div className="text-center py-4 text-blueGray-500">
        <p>Loading user list...</p>
      </div>
    );
  }

  // Handle a fetch error
  if(error) {
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
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  User Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email Address
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {user.firstName} {user.lastName}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.username}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.email}
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
    </>
  );
}
