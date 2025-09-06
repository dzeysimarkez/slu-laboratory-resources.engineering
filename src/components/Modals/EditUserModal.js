// import React from 'react';

// const EditUserModal = ({ children, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
//       <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="mt-3 text-center">
//           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
//             <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
//             </svg>
//           </div>
//           <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">Edit User</h3>
//           <div className="mt-2 px-7 py-3">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditUserModal;
import React from "react";

const EditUserModal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center p-4">
      {/* Modal content area, stops click event from propagating */}
      <div className="relative p-5 border shadow-lg rounded-md bg-white w-full max-w-md md:max-w-xl" onClick={e => e.stopPropagation()}>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
