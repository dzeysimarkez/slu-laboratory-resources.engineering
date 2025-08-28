// import React from "react";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.js";

// // components

// import CardStats from "components/Cards/CardStats.js";

// export default function HeaderStats() {
//   const location = useLocation();

//   if (location.pathname !== "/admin/tables") {
//     return (
//       <>
//         <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12"></div>
//       </>
//     );
//   }
//   return (
//     <>
//       {/* Header */}
//       <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
//         <div className="px-4 md:px-10 mx-auto w-full">
//           <div>
//             {/* Card stats */}
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                 <CardStats
//                   statSubtitle="Category A"
//                   statTitle="350,897"
//                   statArrow="up"
//                   statPercent="3.48"
//                   statPercentColor="text-emerald-500"
//                   statDescripiron="Since last month"
//                   statIconName="far fa-chart-bar"
//                   statIconColor="bg-red-500"
//                 />
//               </div>
//               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                 <CardStats
//                   statSubtitle="Category B"
//                   statTitle="2,356"
//                   statArrow="down"
//                   statPercent="3.48"
//                   statPercentColor="text-red-500"
//                   statDescripiron="Since last week"
//                   statIconName="fas fa-chart-pie"
//                   statIconColor="bg-orange-500"
//                 />
//               </div>
//               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                 <CardStats
//                   statSubtitle="Category C"
//                   statTitle="924"
//                   statArrow="down"
//                   statPercent="1.10"
//                   statPercentColor="text-orange-500"
//                   statDescripiron="Since yesterday"
//                   statIconName="fas fa-users"
//                   statIconColor="bg-pink-500"
//                 />
//               </div>
//               <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                 <CardStats
//                   statSubtitle="Category D"
//                   statTitle="49,65%"
//                   statArrow="up"
//                   statPercent="12"
//                   statPercentColor="text-emerald-500"
//                   statDescripiron="Since last month"
//                   statIconName="fas fa-percent"
//                   statIconColor="bg-lightBlue-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.js";
import axios from "axios";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const location = useLocation();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        if (!backendUrl) {
          throw new Error("Backend URL is not configured.");
        }

        // Updated API endpoint
        const response = await axios.get(`${backendUrl}/api/dashboard-items`);
        setCardData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch dashboard data.");
        setLoading(false);
      }
    };

    if (location.pathname === "/admin/tables") {
      fetchCardData();
    }
  }, [location.pathname]);

  if (location.pathname !== "/admin/tables") {
    return (
      <>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12"></div>
      </>
    );
  }

  // Show loading state
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

  // Show error state
  if (error) {
    return (
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap -mx-4 justify-center items-center">
            <div className="w-full text-center">
              <i className="fas fa-exclamation-triangle text-red-500 text-4xl"></i>
              <p className="text-white mt-2">Error: {error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="UNIQUE ITEMS"
                  statTitle={cardData?.uniqueItemsCount?.toString() || "0"}
                  statArrow="up"
                  statPercent="100"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Number of unique pages"
                  statIconName="fas fa-cubes"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL ITEMS"
                  statTitle={cardData?.totalItemsCount?.toString() || "0"}
                  statArrow="down"
                  statPercent="100"
                  statPercentColor="text-red-500"
                  statDescripiron="Total count of all items"
                  statIconName="fas fa-boxes"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ACTIVE PAGES"
                  statTitle={cardData?.activePagesCount?.toString() || "0"}
                  statArrow="up"
                  statPercent="100"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Published and visible pages"
                  statIconName="fas fa-folder-open"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="INACTIVE PAGES"
                  statTitle={cardData?.inactivePagesCount?.toString() || "0"}
                  statArrow="down"
                  statPercent="100"
                  statPercentColor="text-red-500"
                  statDescripiron="Pages under maintenance"
                  statIconName="fas fa-folder"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}