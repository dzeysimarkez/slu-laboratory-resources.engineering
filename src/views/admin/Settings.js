// import React, { useState, useEffect } from "react";

// // components

// import CardSettings from "components/Cards/CardSettings.js";
// // import CardUserList from "components/Cards/CardUserList.js";
// //import CardProfile from "components/Cards/CardProfile.js";

// export default function Settings() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');

//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error("Failed to parse user data from localStorage:", error);
//         localStorage.removeItem('user');
//       }

//     }
//   }, []);
//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-12/12 px-4">
//           <CardSettings user={user} />
//         </div>
//         <div className="w-full lg:w-12/12 px-4">
//           {/* <CardUserList /> */}
//         </div>
//       </div>
//     </>
//   );
// }
// import React, { useState, useEffect } from "react";
// import CardSettings from "components/Cards/CardSettings"; // Assuming CardSettings is in the same directory

// /**
//  * Parent component that fetches user data from the backend and manages state.
//  */
// export default function Settings() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       setLoading(true);
//       setError(null);
      
//       const storedUser = localStorage.getItem('user');
//       if (!storedUser) {
//         setLoading(false);
//         return;
//       }

//       try {
//         const parsedStoredUser = JSON.parse(storedUser);
        
//         // Fetch the list of all users from your backend API.
//         const response = await fetch('/api/users');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
        
//         // Find the specific logged-in user from the list.
//         const foundUser = data.users.find(u => u._id === parsedStoredUser.id);
        
//         if (foundUser) {
//           setUser(foundUser);
//         } else {
//           setError('User not found in the database.');
//         }

//       } catch (err) {
//         console.error('Failed to fetch user data:', err);
//         setError('Failed to load user data. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUserData();
//   }, []); // The empty dependency array ensures this runs once on component mount.

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-lg">Loading...</p></div>;
//   }

//   if (error) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-red-500 text-lg">{error}</p></div>;
//   }

//   if (!user) {
//     return <div className="flex justify-center items-center h-screen"><p className="text-lg">No user logged in.</p></div>;
//   }

//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full px-4">
//           {/* Pass the fetched user data to CardSettings as a prop. */}
//           <CardSettings user={user} />
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import CardSettings from "components/Cards/CardSettings";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the user data from local storage, which was saved on login
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser); // Set the state with the user object
      } catch (err) {
        // Handle cases where local storage data is corrupted
        setError('Failed to parse user data from local storage.');
        console.error("Failed to parse user data:", err);
      }
    } else {
      setError('No user logged in. Please log in to view this page.');
    }

    setLoading(false);
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p className="text-lg">Loading...</p></div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen"><p className="text-red-500 text-lg">{error}</p></div>;
  }

  if (!user) {
    // This case is now handled by the error state but is a good fallback
    return <div className="flex justify-center items-center h-screen"><p className="text-lg">No user logged in.</p></div>;
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSettings user={user} />
        </div>
      </div>
    </>
  );
}