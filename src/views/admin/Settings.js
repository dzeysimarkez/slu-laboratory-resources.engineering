// // import React, { useState, useEffect } from "react";

// // // components

// // import CardSettings from "components/Cards/CardSettings.js";
// // // import CardUserList from "components/Cards/CardUserList.js";
// // //import CardProfile from "components/Cards/CardProfile.js";

// // export default function Settings() {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user');

// //     if (storedUser) {
// //       try {
// //         setUser(JSON.parse(storedUser));
// //       } catch (error) {
// //         console.error("Failed to parse user data from localStorage:", error);
// //         localStorage.removeItem('user');
// //       }

// //     }
// //   }, []);
// //   return (
// //     <>
// //       <div className="flex flex-wrap">
// //         <div className="w-full lg:w-12/12 px-4">
// //           <CardSettings user={user} />
// //         </div>
// //         <div className="w-full lg:w-12/12 px-4">
// //           {/* <CardUserList /> */}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// // import React, { useState, useEffect } from "react";
// // import CardSettings from "components/Cards/CardSettings"; // Assuming CardSettings is in the same directory

// // /**
// //  * Parent component that fetches user data from the backend and manages state.
// //  */
// // export default function Settings() {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     async function fetchUserData() {
// //       setLoading(true);
// //       setError(null);
      
// //       const storedUser = localStorage.getItem('user');
// //       if (!storedUser) {
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const parsedStoredUser = JSON.parse(storedUser);
        
// //         // Fetch the list of all users from your backend API.
// //         const response = await fetch('/api/users');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
        
// //         // Find the specific logged-in user from the list.
// //         const foundUser = data.users.find(u => u._id === parsedStoredUser.id);
        
// //         if (foundUser) {
// //           setUser(foundUser);
// //         } else {
// //           setError('User not found in the database.');
// //         }

// //       } catch (err) {
// //         console.error('Failed to fetch user data:', err);
// //         setError('Failed to load user data. Please try again.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchUserData();
// //   }, []); // The empty dependency array ensures this runs once on component mount.

// //   if (loading) {
// //     return <div className="flex justify-center items-center h-screen"><p className="text-lg">Loading...</p></div>;
// //   }

// //   if (error) {
// //     return <div className="flex justify-center items-center h-screen"><p className="text-red-500 text-lg">{error}</p></div>;
// //   }

// //   if (!user) {
// //     return <div className="flex justify-center items-center h-screen"><p className="text-lg">No user logged in.</p></div>;
// //   }

// //   return (
// //     <>
// //       <div className="flex flex-wrap">
// //         <div className="w-full px-4">
// //           {/* Pass the fetched user data to CardSettings as a prop. */}
// //           <CardSettings user={user} />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import CardSettings from "components/Cards/CardSettings";
// import CardUserList from "components/Cards/CardUserList.js";

// export default function Settings() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Get the user data from local storage, which was saved on login
//     const storedUser = localStorage.getItem('user');

//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser); // Set the state with the user object
//       } catch (err) {
//         // Handle cases where local storage data is corrupted
//         setError('Failed to parse user data from local storage.');
//         console.error("Failed to parse user data:", err);
//       }
//     } else {
//       setError('No user logged in. Please log in to view this page.');
//     }

//     setLoading(false);
//   }, []); // Empty dependency array ensures this runs once on mount

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-lg">Loading...</p></div>;
//   }

//   if (error) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-red-500 text-lg">{error}</p></div>;
//   }

//   if (!user) {
//     // This case is now handled by the error state but is a good fallback
//     return <div className="flex justify-center items-center h-screen"><p className="text-lg">No user logged in.</p></div>;
//   }

//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full px-4">
//           <CardSettings user={user} />
//         </div>
//         <div className="w-full lg:w-12/12 px-4">
//           <CardUserList />
//         </div>
//       </div>
//     </>
//   );
// }

// src/components/Settings.js

import React, { useState, useEffect } from "react";
import CardSettings from "components/Cards/CardSettings";
import CardUserList from "components/Cards/CardUserList.js";
import EditUserForm from "components/Forms/EditUserForm";
import { toast } from "react-toastify";
import axios from "axios";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State to manage the user being edited.
  // This controls the conditional rendering.
  const [userToEdit, setUserToEdit] = useState(null);
  const backendBaseUrl = "https://slu-backend.vercel.app";

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        setError('Failed to parse user data from local storage.');
        console.error("Failed to parse user data:", err);
      }
    } else {
      setError('No user logged in. Please log in to view this page.');
    }
    setLoading(false);
  }, []);

  // This function is passed to CardUserList to start the editing process.
  // It receives the user object and sets the state, which triggers the view change.
  const handleEdit = (userData) => {
    setUserToEdit(userData);
  };

  // This function is passed to the EditUserForm to handle canceling an edit.
  // It sets the state back to null, returning to the user list.
  const handleCancelEdit = () => {
    setUserToEdit(null);
  };

  // This function handles the actual form submission and API call for updating a user.
  // It is a placeholder; you'll need to implement your actual update logic here.
  const handleUpdate = async (updatedData) => {
    try {
      await axios.put(`${backendBaseUrl}/api/update-user/${updatedData._id}`, updatedData);
      toast.success("User updated successfully!");
      setUserToEdit(null); // Clear the editing state to return to the list
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">No user logged in.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSettings user={user} />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          {/* Conditional Rendering */}
          {userToEdit ? (
            // Display the EditUserForm when userToEdit is not null
            <EditUserForm
              user={userToEdit}
              onUpdate={handleUpdate}
              onClose={handleCancelEdit}
            />
          ) : (
            // Otherwise, display the CardUserList
            // Pass the handleEdit function as a prop
            <CardUserList onEdit={handleEdit} />
          )}
        </div>
      </div>
    </>
  );
}