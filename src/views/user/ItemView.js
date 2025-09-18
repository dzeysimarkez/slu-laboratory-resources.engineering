// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export default function ItemView() {
//   const { id } = useParams(); // Get ID from URL
//   const [item, setItem] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchItem() {
//       try {
//         // Use the full, absolute URL for your backend API
//         const res = await fetch(`https://slu-backend.vercel.app/api/items/${id}`);
        
//         if (!res.ok) {
//           throw new Error(`Failed to fetch item with status: ${res.status}`);
//         }
        
//         const data = await res.json();
        
//         // Check if the response is in the wrapped { success: true, data: item } format.
//         // This makes the frontend more robust against different backend behaviors.
//         if (data && typeof data.success !== 'undefined') {
//           if (data.success) {
//             setItem(data.data);
//             setError(null);
//           } else {
//             throw new Error(data.msg || "An unknown error occurred.");
//           }
//         } else {
//           // Assume the backend is returning the raw item object directly.
//           if (data) {
//             setItem(data);
//             setError(null);
//           } else {
//             throw new Error("Item not found or an unexpected response was received.");
//           }
//         }
//       } catch (err) {
//         console.error("Error loading item:", err);
//         setError(err.message);
//       }
//     }
    
//     fetchItem();
//   }, [id]);

//   if (error) {
//     return <p className="p-8 text-red-600">Error: {error}</p>;
//   }

//   if (!item) {
//     return <p className="p-8 text-lg">Loading...</p>;
//   }
  
//   return (
//     <div className="flex flex-wrap justify-center min-h-screen p-8 bg-blueGray-100">
//       <div className="w-full lg:w-9/12 px-4">
//         <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white">
//           <div className="flex-auto p-8">
//             <div className="flex flex-col md:flex-row justify-center items-start">
//               {/* Product Images Section */}
//               <div className="w-full md:w-6/12 px-4">
//                 <div className="flex justify-center mb-4">
//                   <img
//                     alt="Product main"
//                     src={item.image}
//                     className="shadow-xl rounded-lg h-auto align-middle border-none max-w-full"
//                   />
//                 </div>
//                 {item.thumbnails?.length > 0 && (
//                   <div className="flex space-x-2 overflow-x-auto p-2 rounded-lg bg-gray-50 border border-gray-200">
//                     {item.thumbnails.map((thumb, index) => (
//                       <img
//                         key={index}
//                         alt={`Thumbnail ${index + 1}`}
//                         src={thumb}
//                         className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Product Details Section */}
//               <div className="w-full md:w-6/12 px-4 py-5">
//                 <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
//                   {item.name}
//                 </h3>
//                 <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//                   {item.shortDescription}
//                 </p>
//               </div>
//             </div>

//             {/* Detailed Description Section */}
//             <div className="flex flex-wrap mt-10">
//               <div className="w-full px-4">
//                 <h4 className="text-xl font-semibold leading-normal mt-0 mb-2 text-blueGray-700">
//                   Usage Instructions
//                 </h4>
//                 <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//                   {item.instructions}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemView() {
  const { id } = useParams(); // Get ID from URL
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        // Use the full, absolute URL for your backend API
        const res = await fetch(`https://slu-backend.vercel.app/api/items/${id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch item with status: ${res.status}`);
        }
        
        const data = await res.json();
        
        // Check if the response is in the wrapped { success: true, data: item } format.
        // This makes the frontend more robust against different backend behaviors.
        if (data && typeof data.success !== 'undefined') {
          if (data.success) {
            setItem(data.data);
            setError(null);
          } else {
            throw new Error(data.msg || "An unknown error occurred.");
          }
        } else {
          // Assume the backend is returning the raw item object directly.
          if (data) {
            setItem(data);
            setError(null);
          } else {
            throw new Error("Item not found or an unexpected response was received.");
          }
        }
      } catch (err) {
        console.error("Error loading item:", err);
        setError(err.message);
      }
    }
    
    fetchItem();
  }, [id]);

  if (error) {
    return <p className="p-8 text-red-600">Error: {error}</p>;
  }

  if (!item) {
    return <p className="p-8 text-lg">Loading...</p>;
  }
  
  return (
    <div className="flex flex-wrap justify-center min-h-screen p-8 bg-blueGray-100">
      <div className="w-full lg:w-9/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white">
          <div className="flex-auto p-8">
            <div className="flex flex-col md:flex-row justify-center items-start">
              {/* Product Images Section */}
              <div className="w-full md:w-6/12 px-4">
                <div className="flex justify-center mb-4">
                  <img
                    alt="Product main"
                    src={item.image}
                    className="shadow-xl rounded-lg h-auto align-middle border-none max-w-full"
                  />
                </div>
                {item.thumbnails?.length > 0 && (
                  <div className="flex space-x-2 overflow-x-auto p-2 rounded-lg bg-gray-50 border border-gray-200">
                    {item.thumbnails.map((thumb, index) => (
                      <img
                        key={index}
                        alt={`Thumbnail ${index + 1}`}
                        src={thumb}
                        className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details Section */}
              <div className="w-full md:w-6/12 px-4 py-5">
                <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {item.name}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {item.shortDescription}
                </p>
              </div>
            </div>

            {/* Detailed Description Section */}
            <div className="flex flex-wrap mt-10">
              <div className="w-full px-4">
                <h4 className="text-xl font-semibold leading-normal mt-0 mb-2 text-blueGray-700">
                  Usage Instructions
                </h4>
                {/* Updated to display the rich text content from ReactQuill */}
                <div
                  className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
                  dangerouslySetInnerHTML={{ __html: item.instructions }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
