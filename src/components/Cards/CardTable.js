// // // import React from "react";
// // // import PropTypes from "prop-types";

// // // // components

// // // import TableDropdown from "components/Dropdowns/TableDropdown.js";

// // // export default function CardTable({ color }) {
// // //   return (
// // //     <>
// // //       <div
// // //         className={
// // //           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
// // //           (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
// // //         }
// // //       >
// // //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// // //           <div className="flex flex-wrap items-center">
// // //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// // //               <h3
// // //                 className={
// // //                   "font-semibold text-lg " +
// // //                   (color === "light" ? "text-blueGray-700" : "text-white")
// // //                 }
// // //               >
// // //                 Equipment List
// // //               </h3>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="block w-full overflow-x-auto">
// // //           {/* Projects table */}
// // //           <table className="items-center w-full bg-transparent border-collapse">
// // //             <thead>
// // //               <tr>
// // //                 <th
// // //                   className={
// // //                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
// // //                     (color === "light"
// // //                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
// // //                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
// // //                   }
// // //                 >
// // //                   Item Name
// // //                 </th>
// // //                 <th
// // //                   className={
// // //                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
// // //                     (color === "light"
// // //                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
// // //                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
// // //                   }
// // //                 >
// // //                   Item Count
// // //                 </th>
// // //                 <th
// // //                   className={
// // //                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
// // //                     (color === "light"
// // //                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
// // //                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
// // //                   }
// // //                 >
// // //                   Category
// // //                 </th>
// // //                 <th
// // //                   className={
// // //                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
// // //                     (color === "light"
// // //                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
// // //                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
// // //                   }
// // //                 ></th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr>
// // //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
// // //                   <img
// // //                     src={require("assets/img/bootstrap.jpg")}
// // //                     className="h-12 w-12 bg-white rounded-full border"
// // //                     alt="..."
// // //                   ></img>{" "}
// // //                   <span
// // //                     className={
// // //                       "ml-3 font-bold " +
// // //                       +(color === "light" ? "text-blueGray-600" : "text-white")
// // //                     }
// // //                   >
// // //                     Argon Design System
// // //                   </span>
// // //                 </th>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   $2,500 USD
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   pending
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// // //                   <TableDropdown />
// // //                 </td>
// // //               </tr>
// // //               {/* <tr>
// // //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
// // //                   <img
// // //                     src={require("assets/img/angular.jpg")}
// // //                     className="h-12 w-12 bg-white rounded-full border"
// // //                     alt="..."
// // //                   ></img>{" "}
// // //                   <span
// // //                     className={
// // //                       "ml-3 font-bold " +
// // //                       +(color === "light" ? "text-blueGray-600" : "text-white")
// // //                     }
// // //                   >
// // //                     Angular Now UI Kit PRO
// // //                   </span>
// // //                 </th>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   $1,800 USD
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
// // //                   completed
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex">
// // //                     <img
// // //                       src={require("assets/img/team-1-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-2-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-3-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-4-470x470.png")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex items-center">
// // //                     <span className="mr-2">100%</span>
// // //                     <div className="relative w-full">
// // //                       <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
// // //                         <div
// // //                           style={{ width: "100%" }}
// // //                           className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
// // //                         ></div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// // //                   <TableDropdown />
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
// // //                   <img
// // //                     src={require("assets/img/sketch.jpg")}
// // //                     className="h-12 w-12 bg-white rounded-full border"
// // //                     alt="..."
// // //                   ></img>{" "}
// // //                   <span
// // //                     className={
// // //                       "ml-3 font-bold " +
// // //                       +(color === "light" ? "text-blueGray-600" : "text-white")
// // //                     }
// // //                   >
// // //                     Black Dashboard Sketch
// // //                   </span>
// // //                 </th>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   $3,150 USD
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <i className="fas fa-circle text-red-500 mr-2"></i> delayed
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex">
// // //                     <img
// // //                       src={require("assets/img/team-1-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-2-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-3-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-4-470x470.png")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex items-center">
// // //                     <span className="mr-2">73%</span>
// // //                     <div className="relative w-full">
// // //                       <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
// // //                         <div
// // //                           style={{ width: "73%" }}
// // //                           className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
// // //                         ></div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// // //                   <TableDropdown />
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
// // //                   <img
// // //                     src={require("assets/img/react.jpg")}
// // //                     className="h-12 w-12 bg-white rounded-full border"
// // //                     alt="..."
// // //                   ></img>{" "}
// // //                   <span
// // //                     className={
// // //                       "ml-3 font-bold " +
// // //                       +(color === "light" ? "text-blueGray-600" : "text-white")
// // //                     }
// // //                   >
// // //                     React Material Dashboard
// // //                   </span>
// // //                 </th>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   $4,400 USD
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <i className="fas fa-circle text-teal-500 mr-2"></i> on
// // //                   schedule
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex">
// // //                     <img
// // //                       src={require("assets/img/team-1-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-2-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-3-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-4-470x470.png")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex items-center">
// // //                     <span className="mr-2">90%</span>
// // //                     <div className="relative w-full">
// // //                       <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
// // //                         <div
// // //                           style={{ width: "90%" }}
// // //                           className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
// // //                         ></div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// // //                   <TableDropdown />
// // //                 </td>
// // //               </tr>
// // //               <tr>
// // //                 <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
// // //                   <img
// // //                     src={require("assets/img/vue.jpg")}
// // //                     className="h-12 w-12 bg-white rounded-full border"
// // //                     alt="..."
// // //                   ></img>{" "}
// // //                   <span
// // //                     className={
// // //                       "ml-3 font-bold " +
// // //                       +(color === "light" ? "text-blueGray-600" : "text-white")
// // //                     }
// // //                   >
// // //                     React Material Dashboard
// // //                   </span>
// // //                 </th>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   $2,200 USD
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
// // //                   completed
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex">
// // //                     <img
// // //                       src={require("assets/img/team-1-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-2-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-3-800x800.jpg")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                     <img
// // //                       src={require("assets/img/team-4-470x470.png")}
// // //                       alt="..."
// // //                       className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
// // //                     ></img>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// // //                   <div className="flex items-center">
// // //                     <span className="mr-2">100%</span>
// // //                     <div className="relative w-full">
// // //                       <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
// // //                         <div
// // //                           style={{ width: "100%" }}
// // //                           className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
// // //                         ></div>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </td>
// // //                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// // //                   <TableDropdown />
// // //                 </td>
// // //               </tr> */}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // CardTable.defaultProps = {
// // //   color: "light",
// // // };

// // // CardTable.propTypes = {
// // //   color: PropTypes.oneOf(["light", "dark"]),
// // // };

// // import React, { useEffect, useState } from "react";
// // import PropTypes from "prop-types";
// // import TableDropdown from "components/Dropdowns/TableDropdown.js";

// // export default function CardTable({ color }) {
// //   const [items, setItems] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch("https://slu-backend.vercel.app/api/itemList")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setItems(data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching items:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <>
// //       <div
// //         className={
// //           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
// //           (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
// //         }
// //       >
// //         <div className="rounded-t mb-0 px-4 py-3 border-0">
// //           <div className="flex flex-wrap items-center">
// //             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
// //               <h3
// //                 className={
// //                   "font-semibold text-lg " +
// //                   (color === "light" ? "text-blueGray-700" : "text-white")
// //                 }
// //               >
// //                 Item List
// //               </h3>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="block w-full overflow-x-auto">
// //           {loading ? (
// //             <div className="p-6 text-center text-blueGray-500">
// //               Loading...
// //             </div>
// //           ) : (
// //             <table className="items-center w-full bg-transparent border-collapse">
// //               <thead>
// //                 <tr>
// //                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                     Name
// //                   </th>
// //                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                     Category
// //                   </th>
// //                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                     Count
// //                   </th>
// //                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                     Image
// //                   </th>
// //                   <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {items.map((item) => (
// //                   <tr key={item._id}>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       {item.name}
// //                     </td>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       {item.category || "-"}
// //                     </td>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       {item.count}
// //                     </td>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
// //                       {item.image ? (
// //                         <img
// //                           src={item.image}
// //                           alt={item.name}
// //                           className="h-12 w-12 object-cover rounded"
// //                         />
// //                       ) : (
// //                         "-"
// //                       )}
// //                     </td>
// //                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
// //                       <TableDropdown />
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // CardTable.defaultProps = {
// //   color: "light",
// // };

// // CardTable.propTypes = {
// //   color: PropTypes.oneOf(["light", "dark"]),
// // };
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import TableDropdown from "components/Dropdowns/TableDropdown.js";

// export default function CardTable({ color }) {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // New state variables for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     fetch("https://slu-backend.vercel.app/api/itemList")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching items:", err);
//         setLoading(false);
//       });
//   }, []);

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <div
//         className={
//           "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
//           (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
//         }
//       >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//               <h3
//                 className={
//                   "font-semibold text-lg " +
//                   (color === "light" ? "text-blueGray-700" : "text-white")
//                 }
//               >
//                 Item List
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="block w-full overflow-x-auto">
//           {loading ? (
//             <div className="p-6 text-center text-blueGray-500">
//               Loading...
//             </div>
//           ) : (
//             <>
//               <table className="items-center w-full bg-transparent border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Name
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Category
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Count
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Image
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {currentItems.map((item) => (
//                     <tr key={item._id}>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {item.name}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {item.category || "-"}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {item.count}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {item.image ? (
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="h-12 w-12 object-cover rounded"
//                           />
//                         ) : (
//                           "-"
//                         )}
//                       </td>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
//                         <TableDropdown />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Pagination Controls */}
//               {items.length > itemsPerPage && (
//                 <div className="flex justify-center mt-4 mb-4">
//                   <button
//                     onClick={handlePrevPage}
//                     disabled={currentPage === 1}
//                     className="mx-1 px-3 py-1 rounded-md text-sm font-semibold text-blueGray-600 border border-blueGray-300 disabled:opacity-50"
//                   >
//                     Previous
//                   </button>
//                   {[...Array(totalPages)].map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => paginate(index + 1)}
//                       className={`mx-1 px-3 py-1 rounded-md text-sm font-semibold ${
//                         currentPage === index + 1
//                           ? "bg-blueGray-600 text-white"
//                           : "text-blueGray-600 border border-blueGray-300"
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}
//                   <button
//                     onClick={handleNextPage}
//                     disabled={currentPage === totalPages}
//                     className="mx-1 px-3 py-1 rounded-md text-sm font-semibold text-blueGray-600 border border-blueGray-300 disabled:opacity-50"
//                   >
//                     Next
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import EditItemModal from "components/Modals/EditItemModal.js"; // This component needs to be created
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardTable({ color }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backendUrl = "https://slu-backend.vercel.app";

  const fetchItems = () => {
    setLoading(true);
    fetch(`${backendUrl}/api/itemList`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // --- New Handlers for Edit and Delete ---
  const handleEdit = (itemId) => {
    setLoading(true);
    fetch(`${backendUrl}/api/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSelectedItem(data.data);
          setIsModalOpen(true);
          console.log('Modal state is now:', true);
        } else {
          toast.error("Failed to fetch item details.");
        }
      })
      .catch((err) => {
        console.error("Error fetching item for edit:", err);
        toast.error("Error fetching item details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateItem = async (updatedData) => {
    try {
      const res = await fetch(`${backendUrl}/api/items/${updatedData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        toast.success("Item updated successfully! 🥳");
        setIsModalOpen(false);
        fetchItems(); // Refresh the table data
      } else {
        const errorData = await res.json();
        toast.error(`Failed to update item: ${errorData.msg}`);
      }
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("An error occurred while updating the item.");
    }
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const res = await fetch(`${backendUrl}/api/items/${itemId}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          toast.success("Item deleted successfully! 🗑️");
          fetchItems(); // Refresh the table data
        } else {
          const errorData = await res.json();
          toast.error(`Failed to delete item: ${errorData.msg}`);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("An error occurred while deleting the item.");
      }
    }
  };

  return (
    <>
      {/* ... (Existing table JSX) ... */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Item List
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {loading ? (
            <div className="p-6 text-center text-blueGray-500">
              Loading...
            </div>
          ) : (
            <>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  {/* ... (Table headers) ... */}
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Count
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Image
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item._id}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.name}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.category || "-"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.count}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-12 w-12 object-cover rounded"
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <TableDropdown
                          itemId={item._id}
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ... (Pagination controls) ... */}
              {items.length > itemsPerPage && (
                <div className="flex justify-center mt-4 mb-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="mx-1 px-3 py-1 rounded-md text-sm font-semibold text-blueGray-600 border border-blueGray-300 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`mx-1 px-3 py-1 rounded-md text-sm font-semibold ${
                        currentPage === index + 1
                          ? "bg-blueGray-600 text-white"
                          : "text-blueGray-600 border border-blueGray-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-3 py-1 rounded-md text-sm font-semibold text-blueGray-600 border border-blueGray-300 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Modal for editing */}
      {isModalOpen && (
        <EditItemModal
          item={selectedItem}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateItem}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};