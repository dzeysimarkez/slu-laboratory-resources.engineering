// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // export default function CardSettings(props) {
// // // //   const [formData, setFormData] = useState(props.user || {});
// // // //   const [isSaving, setIsSaving] = useState(false);
// // // //   const [message, setMessage] = useState('');

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({ ...formData, [name]: value });
// // // //   };

// // // //   const handleSave = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsSaving(true);
// // // //     setMessage('');

// // // //     try {
// // // //       // Send a PUT request to the backend with the updated data
// // // //       const response = await axios.put(`/api/users/${formData._id}`, formData);
// // // //       console.log('Update successful:', response.data);
// // // //       setMessage('Profile updated successfully!');
// // // //     } catch (error) {
// // // //       console.error('Update failed:', error);
// // // //       setMessage('Failed to update profile.');
// // // //     } finally {
// // // //       setIsSaving(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// // // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // // //           <div className="text-center flex justify-between">
// // // //             <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
// // // //             <button
// // // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // // //               type="button"
// // // //               onClick={handleSave}
// // // //               disabled={isSaving}
// // // //             >
// // // //               {isSaving ? 'Saving...' : 'Save'}
// // // //             </button>
// // // //           </div>
// // // //           {message && (
// // // //             <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// // // //               {message}
// // // //             </p>
// // // //           )}
// // // //         </div>
// // // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // // //           <form>
// // // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // //               User Information
// // // //             </h6>
// // // //             <div className="flex flex-wrap">
// // // //               <div className="w-full lg:w-6/12 px-4">
// // // //                 <div className="relative w-full mb-3">
// // // //                   <label
// // // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // // //                     htmlFor="firstName"
// // // //                   >
// // // //                     First Name
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="firstName"
// // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                     value={formData.firstName || ''}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="w-full lg:w-6/12 px-4">
// // // //                 <div className="relative w-full mb-3">
// // // //                   <label
// // // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // // //                     htmlFor="lastName"
// // // //                   >
// // // //                     Last Name
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="lastName"
// // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                     value={formData.lastName || ''}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="w-full lg:w-6/12 px-4">
// // // //                 <div className="relative w-full mb-3">
// // // //                   <label
// // // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // // //                     htmlFor="email"
// // // //                   >
// // // //                     Email address
// // // //                   </label>
// // // //                   <input
// // // //                     type="email"
// // // //                     name="email"
// // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                     value={formData.email || ''}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <hr className="mt-6 border-b-1 border-blueGray-300" />

// // // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // // //               Contact Information
// // // //             </h6>
// // // //             <div className="flex flex-wrap">
// // // //               <div className="w-full lg:w-12/12 px-4">
// // // //                 <div className="relative w-full mb-3">
// // // //                   <label
// // // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // // //                     htmlFor="address"
// // // //                   >
// // // //                     Address
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="address"
// // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                     value={formData.address || ''}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="w-full lg:w-4/12 px-4">
// // // //                 <div className="relative w-full mb-3">
// // // //                   <label
// // // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // // //                     htmlFor="contactNumber"
// // // //                   >
// // // //                     Contact Number
// // // //                   </label>
// // // //                   <input
// // // //                     type="text"
// // // //                     name="contactNumber"
// // // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // // //                     value={formData.contactNumber || ''}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// // // import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// // // import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// // // // IMPORTANT: DO NOT EDIT THESE GLOBAL VARIABLES.
// // // // They are automatically provided by the Canvas environment at runtime.
// // // const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// // // const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
// // // const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// // // // Initialize Firebase App
// // // const app = initializeApp(firebaseConfig);
// // // const db = getFirestore(app);
// // // const auth = getAuth(app);

// // // export default function CardSettings() {
// // //   const [formData, setFormData] = useState({});
// // //   const [isSaving, setIsSaving] = useState(false);
// // //   const [message, setMessage] = useState('');
// // //   const [loading, setLoading] = useState(true);

// // //   // Use a state variable to store the user ID
// // //   const [userId, setUserId] = useState(null);

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// // //       if (user) {
// // //         setUserId(user.uid);
// // //         try {
// // //           // Fetch user data from Firestore
// // //           const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'user-profiles', user.uid);
// // //           const docSnap = await getDoc(userDocRef);

// // //           if (docSnap.exists()) {
// // //             setFormData(docSnap.data());
// // //           } else {
// // //             console.log("No such document!");
// // //           }
// // //         } catch (error) {
// // //           console.error("Error fetching user data:", error);
// // //         } finally {
// // //           setLoading(false);
// // //         }
// // //       } else {
// // //         // Sign in anonymously if no user is found
// // //         if (initialAuthToken) {
// // //           await signInWithCustomToken(auth, initialAuthToken);
// // //         } else {
// // //           await signInAnonymously(auth);
// // //         }
// // //       }
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSave = async (e) => {
// // //     e.preventDefault();
// // //     setIsSaving(true);
// // //     setMessage('');

// // //     try {
// // //       // Use the full, absolute URL for your backend API
// // //       const response = await axios.put(`https://slu-backend.vercel.app/api/users/${userId}`, formData);
// // //       console.log('Update successful:', response.data);
// // //       setMessage('Profile updated successfully!');
// // //     } catch (error) {
// // //       console.error('Update failed:', error);
// // //       setMessage('Failed to update profile.');
// // //     } finally {
// // //       setIsSaving(false);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <p className="p-8 text-lg">Loading...</p>;
// // //   }

// // //   return (
// // //     <>
// // //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// // //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// // //           <div className="text-center flex justify-between">
// // //             <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
// // //             <button
// // //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// // //               type="button"
// // //               onClick={handleSave}
// // //               disabled={isSaving}
// // //             >
// // //               {isSaving ? 'Saving...' : 'Save'}
// // //             </button>
// // //           </div>
// // //           {message && (
// // //             <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// // //               {message}
// // //             </p>
// // //           )}
// // //         </div>
// // //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// // //           <form>
// // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // //               User Information
// // //             </h6>
// // //             <div className="flex flex-wrap">
// // //               <div className="w-full lg:w-6/12 px-4">
// // //                 <div className="relative w-full mb-3">
// // //                   <label
// // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // //                     htmlFor="firstName"
// // //                   >
// // //                     First Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="firstName"
// // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                     value={formData.firstName || ''}
// // //                     onChange={handleInputChange}
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="w-full lg:w-6/12 px-4">
// // //                 <div className="relative w-full mb-3">
// // //                   <label
// // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // //                     htmlFor="lastName"
// // //                   >
// // //                     Last Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="lastName"
// // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                     value={formData.lastName || ''}
// // //                     onChange={handleInputChange}
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="w-full lg:w-6/12 px-4">
// // //                 <div className="relative w-full mb-3">
// // //                   <label
// // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // //                     htmlFor="email"
// // //                   >
// // //                     Email address
// // //                   </label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                     value={formData.email || ''}
// // //                     onChange={handleInputChange}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <hr className="mt-6 border-b-1 border-blueGray-300" />

// // //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// // //               Contact Information
// // //             </h6>
// // //             <div className="flex flex-wrap">
// // //               <div className="w-full lg:w-12/12 px-4">
// // //                 <div className="relative w-full mb-3">
// // //                   <label
// // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // //                     htmlFor="address"
// // //                   >
// // //                     Address
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="address"
// // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                     value={formData.address || ''}
// // //                     onChange={handleInputChange}
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <div className="w-full lg:w-4/12 px-4">
// // //                 <div className="relative w-full mb-3">
// // //                   <label
// // //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// // //                     htmlFor="contactNumber"
// // //                   >
// // //                     Contact Number
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="contactNumber"
// // //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// // //                     value={formData.contactNumber || ''}
// // //                     onChange={handleInputChange}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// // import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// // import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// // // IMPORTANT: DO NOT EDIT THESE GLOBAL VARIABLES.
// // // They are automatically provided by the Canvas environment at runtime.
// // const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// // const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
// // const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// // // Initialize Firebase App
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// // const auth = getAuth(app);

// // export default function CardSettings() {
// //   const [formData, setFormData] = useState({});
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [message, setMessage] = useState('');
// //   const [loading, setLoading] = useState(true);

// //   // Use a state variable to store the user ID
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         setUserId(user.uid);
// //         try {
// //           // Fetch user data from Firestore
// //           const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'user-profiles', user.uid);
// //           const docSnap = await getDoc(userDocRef);

// //           if (docSnap.exists()) {
// //             setFormData(docSnap.data());
// //           } else {
// //             // Document does not exist, so create a new one with a blank profile
// //             console.log("No user profile document found. Creating a new one...");
// //             const initialData = {
// //               firstName: '',
// //               lastName: '',
// //               email: user.email || '',
// //               address: '',
// //               contactNumber: ''
// //             };
// //             await setDoc(userDocRef, initialData);
// //             setFormData(initialData);
// //           }
// //         } catch (error) {
// //           console.error("Error fetching or creating user data:", error);
// //         } finally {
// //           setLoading(false);
// //         }
// //       } else {
// //         // Sign in anonymously if no user is found
// //         if (initialAuthToken) {
// //           await signInWithCustomToken(auth, initialAuthToken);
// //         } else {
// //           await signInAnonymously(auth);
// //         }
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSave = async (e) => {
// //     e.preventDefault();
// //     setIsSaving(true);
// //     setMessage('');

// //     try {
// //       // Use the full, absolute URL for your backend API
// //       const response = await axios.put(`https://slu-backend.vercel.app/api/users/${userId}`, formData);
// //       console.log('Update successful:', response.data);
// //       setMessage('Profile updated successfully!');

// //       // Save the updated data to Firestore
// //       const userDocRef = doc(db, 'artifacts', appId, 'users', userId, 'user-profiles', userId);
// //       await setDoc(userDocRef, formData);

// //     } catch (error) {
// //       console.error('Update failed:', error);
// //       setMessage('Failed to update profile.');
// //     } finally {
// //       setIsSaving(false);
// //     }
// //   };

// //   if (loading) {
// //     return <p className="p-8 text-lg">Loading...</p>;
// //   }

// //   return (
// //     <>
// //       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
// //         <div className="rounded-t bg-white mb-0 px-6 py-6">
// //           <div className="text-center flex justify-between">
// //             <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
// //             <button
// //               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
// //               type="button"
// //               onClick={handleSave}
// //               disabled={isSaving}
// //             >
// //               {isSaving ? 'Saving...' : 'Save'}
// //             </button>
// //           </div>
// //           {message && (
// //             <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
// //               {message}
// //             </p>
// //           )}
// //         </div>
// //         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
// //           <form>
// //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// //               User Information
// //             </h6>
// //             <div className="flex flex-wrap">
// //               <div className="w-full lg:w-6/12 px-4">
// //                 <div className="relative w-full mb-3">
// //                   <label
// //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// //                     htmlFor="firstName"
// //                   >
// //                     First Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="firstName"
// //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                     value={formData.firstName || ''}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //               <div className="w-full lg:w-6/12 px-4">
// //                 <div className="relative w-full mb-3">
// //                   <label
// //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// //                     htmlFor="lastName"
// //                   >
// //                     Last Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="lastName"
// //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                     value={formData.lastName || ''}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //               <div className="w-full lg:w-6/12 px-4">
// //                 <div className="relative w-full mb-3">
// //                   <label
// //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// //                     htmlFor="email"
// //                   >
// //                     Email address
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                     value={formData.email || ''}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             <hr className="mt-6 border-b-1 border-blueGray-300" />

// //             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
// //               Contact Information
// //             </h6>
// //             <div className="flex flex-wrap">
// //               <div className="w-full lg:w-12/12 px-4">
// //                 <div className="relative w-full mb-3">
// //                   <label
// //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// //                     htmlFor="address"
// //                   >
// //                     Address
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="address"
// //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                     value={formData.address || ''}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //               <div className="w-full lg:w-4/12 px-4">
// //                 <div className="relative w-full mb-3">
// //                   <label
// //                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
// //                     htmlFor="contactNumber"
// //                   >
// //                     Contact Number
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="contactNumber"
// //                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
// //                     value={formData.contactNumber || ''}
// //                     onChange={handleInputChange}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously } from "firebase/auth";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// // IMPORTANT: DO NOT EDIT THESE GLOBAL VARIABLES.
// // They are automatically provided by the Canvas environment at runtime.
// const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
// const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export default function CardSettings() {
//   const [formData, setFormData] = useState({});
//   const [isSaving, setIsSaving] = useState(false);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Use a state variable to store the user ID
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUserId(user.uid);
//         try {
//           // Fetch user data from Firestore
//           const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'user-profiles', user.uid);
//           const docSnap = await getDoc(userDocRef);

//           if (docSnap.exists()) {
//             setFormData(docSnap.data());
//           } else {
//             // Document does not exist, so create a new one with a blank profile
//             console.log("No user profile document found. Creating a new one...");
//             const initialData = {
//               firstName: '',
//               lastName: '',
//               email: user.email || '',
//               address: '',
//               contactNumber: ''
//             };
//             await setDoc(userDocRef, initialData);
//             setFormData(initialData);
//           }
//         } catch (error) {
//           console.error("Error fetching or creating user data:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         // Sign in anonymously if no user is found
//         if (initialAuthToken) {
//           await signInWithCustomToken(auth, initialAuthToken);
//         } else {
//           await signInAnonymously(auth);
//         }
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     setIsSaving(true);
//     setMessage('');

//     try {
//       // Use the full, absolute URL for your backend API
//       const response = await axios.put(`https://slu-backend.vercel.app/api/users/${userId}`, formData);
//       console.log('Update successful:', response.data);
//       setMessage('Profile updated successfully!');

//       // Save the updated data to Firestore
//       const userDocRef = doc(db, 'artifacts', appId, 'users', userId, 'user-profiles', userId);
//       await setDoc(userDocRef, formData);

//     } catch (error) {
//       console.error('Update failed:', error);
//       setMessage('Failed to update profile.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   if (loading) {
//     return <p className="p-8 text-lg">Loading...</p>;
//   }

//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//         <div className="rounded-t bg-white mb-0 px-6 py-6">
//           <div className="text-center flex justify-between">
//             <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
//             <button
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="button"
//               onClick={handleSave}
//               disabled={isSaving}
//             >
//               {isSaving ? 'Saving...' : 'Save'}
//             </button>
//           </div>
//           {message && (
//             <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
//               {message}
//             </p>
//           )}
//         </div>
//         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//           <form>
//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               User Information
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="firstName"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={formData.firstName || ''}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="lastName"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={formData.lastName || ''}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="email"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={formData.email || ''}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>

//             <hr className="mt-6 border-b-1 border-blueGray-300" />

//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               Contact Information
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-12/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="address"
//                   >
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={formData.address || ''}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="contactNumber"
//                   >
//                     Contact Number
//                   </label>
//                   <input
//                     type="text"
//                     name="contactNumber"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={formData.contactNumber || ''}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";

export default function CardSettings() {
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // This useEffect loads data from localStorage when the component mounts.
  useEffect(() => {
    try {
      // Retrieve the user data from localStorage
      const userData = localStorage.getItem("userProfile");
      if (userData) {
        setFormData(JSON.parse(userData));
      } else {
        // If no data exists, initialize with an empty object
        const initialData = {
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          contactNumber: ''
        };
        setFormData(initialData);
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      // Save the updated data to localStorage
      // We stringify the object because localStorage can only store strings
      localStorage.setItem("userProfile", JSON.stringify(formData));
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Update failed:', error);
      setMessage('Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return <p className="p-8 text-lg">Loading...</p>;
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
          {message && (
            <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.firstName || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.lastName || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.address || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="contactNumber"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.contactNumber || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
