// import React, { useState, useEffect } from "react";
// // import CardSettings from "components/Cards/CardSettings";
// import CardUserList from "components/Cards/CardUserList.js";
// import EditUserForm from "components/Forms/EditUserForm";
// import { toast } from "react-toastify";
// import axios from "axios";

// export default function Settings() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State to manage the user being edited.
//   // This controls the conditional rendering.
//   const [userToEdit, setUserToEdit] = useState(null);
//   const backendBaseUrl = "https://slu-backend.vercel.app";

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');

//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//       } catch (err) {
//         setError('Failed to parse user data from local storage.');
//         console.error("Failed to parse user data:", err);
//       }
//     } else {
//       setError('No user logged in. Please log in to view this page.');
//     }
//     setLoading(false);
//   }, []);

//   // This function is passed to CardUserList to start the editing process.
//   // It receives the user object and sets the state, which triggers the view change.
//   const handleEdit = (userData) => {
//     setUserToEdit(userData);
//   };

//   // This function is passed to the EditUserForm to handle canceling an edit.
//   // It sets the state back to null, returning to the user list.
//   const handleCancelEdit = () => {
//     setUserToEdit(null);
//   };

//   // This function handles the actual form submission and API call for updating a user.
//   // It is a placeholder; you'll need to implement your actual update logic here.
//   const handleUpdate = async (updatedData) => {
//       // Check the ID before making the API call
//   // The 'updatedData' object comes from the form and should contain the ID
//   // However, it's safer to get the ID from the parent's state
//   const userId = userToEdit?._id;
//   console.log(userId);

//   if (!userId) {
//     console.error("User ID is missing! Cannot update.");
//     toast.error("User ID is missing. Please try again.");
//     return; // Stop the function here to prevent the API call
//   }
//     try {
//       await axios.post(`${backendBaseUrl}/api/update-user/${updatedData._id}`, updatedData);
//       toast.success("User updated successfully!");
//       setUserToEdit(null); // Clear the editing state to return to the list
//     } catch (error) {
//       console.error("Failed to update user:", error);
//       toast.error("Failed to update user. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
//         <div className="px-4 md:px-10 mx-auto w-full">
//           <div className="flex flex-wrap -mx-4 justify-center items-center">
//             <div className="w-full text-center">
//               <i className="fas fa-spinner fa-pulse text-white text-4xl"></i>
//               <p className="text-white mt-2">Loading...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg">No user logged in.</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full px-4">
//           {/* <CardSettings user={user} /> */}
//         </div>
//         <div className="w-full lg:w-12/12 px-4">
//           {/* Conditional Rendering */}
//           {userToEdit ? (
//             // Display the EditUserForm when userToEdit is not null
//             <EditUserForm
//               user={userToEdit}
//               onUpdate={handleUpdate}
//               onClose={handleCancelEdit}
//             />
//           ) : (
//             // Otherwise, display the CardUserList
//             // Pass the handleEdit function as a prop
//             <CardUserList onEdit={handleEdit} loggedInUser={user}/>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
// import CardSettings from "components/Cards/CardSettings";
import CardUserList from "components/Cards/CardUserList.js";
import EditUserForm from "components/Forms/EditUserForm";
import AddUserForm from "components/Forms/AddUserForm"; // Import the new form
import { toast } from "react-toastify";
import axios from "axios";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State to manage the user being edited.
  // This controls the conditional rendering for Edit.
  const [userToEdit, setUserToEdit] = useState(null);
  
  // State to manage the visibility of the Add User form.
  const [showAddForm, setShowAddForm] = useState(false); // <-- New state for Add Form
  
  // State to force CardUserList to refresh (used after Add/Update)
  const [refreshListKey, setRefreshListKey] = useState(0); // <-- New state for refreshing list
  
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

  // Handler to show the Add User form
  const handleShowAddForm = () => {
    setUserToEdit(null); // Ensure Edit form is hidden
    setShowAddForm(true);
  };
  
  // Handler to cancel adding a user (closes the Add User form)
  const handleCancelAdd = () => {
    setShowAddForm(false);
  };
  
  // Handler called after a user is successfully added
  const handleUserAdded = () => {
    setShowAddForm(false); // Close the form
    setRefreshListKey(prevKey => prevKey + 1); // Trigger refresh in CardUserList
  };

  // This function is passed to CardUserList to start the editing process.
  const handleEdit = (userData) => {
    setShowAddForm(false); // Ensure Add form is hidden
    setUserToEdit(userData);
  };

  // This function is passed to the EditUserForm to handle canceling an edit.
  const handleCancelEdit = () => {
    setUserToEdit(null);
  };

  // This function handles the actual form submission and API call for updating a user.
  const handleUpdate = async (updatedData) => {
    const userId = userToEdit?._id;

    if (!userId) {
      console.error("User ID is missing! Cannot update.");
      toast.error("User ID is missing. Please try again.");
      return;
    }
      
    try {
      // NOTE: The CardUserList component you provided refreshes its data using 'refreshKey' which you 
      // do not have here. We will use the new 'refreshListKey' state to trigger a list refresh.
      await axios.post(`${backendBaseUrl}/api/update-user/${updatedData._id}`, updatedData);
      toast.success("User updated successfully!");
      setUserToEdit(null); // Clear the editing state to return to the list
      setRefreshListKey(prevKey => prevKey + 1); // Trigger refresh in CardUserList
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap -mx-4 justify-center items-center">
            <div className="w-full text-center">
              <i className="fas fa-spinner fa-pulse text-white text-4xl"></i>
              <p className="text-white mt-2">Loading...</p>
            </div>
          </div>
        </div>
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
          {/* <CardSettings user={user} /> */}
        </div>
        <div className="w-full lg:w-12/12 px-4">
          {/* Conditional Rendering Logic: Add Form > Edit Form > User List */}
          {showAddForm ? (
            // 1. Display the AddUserForm
            <AddUserForm 
              onUserAdded={handleUserAdded} 
              onClose={handleCancelAdd} 
            />
          ) : userToEdit ? (
            // 2. Display the EditUserForm
            <EditUserForm
              user={userToEdit}
              onUpdate={handleUpdate}
              onClose={handleCancelEdit}
            />
          ) : (
            // 3. Otherwise, display the CardUserList
            <CardUserList 
              onEdit={handleEdit} 
              onAddUser={handleShowAddForm} // <-- Pass the new handler
              loggedInUser={user}
              refreshKey={refreshListKey} // <-- Pass the key to force refresh
            />
          )}
        </div>
      </div>
    </>
  );
}