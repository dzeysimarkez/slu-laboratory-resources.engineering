import React from "react";

export default function ItemView() {
  const sampleImageUrl =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="flex flex-wrap justify-center min-h-screen p-8 bg-blueGray-100">
        <div className="w-full lg:w-9/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white">
            <div className="flex-auto p-8">
              <div className="flex flex-col md:flex-row justify-center items-start">
                {/* Product Images Section */}
                <div className="w-full md:w-6/12 px-4">
                  <div className="flex justify-center mb-4">
                    <img
                      alt="Product main view"
                      src={sampleImageUrl}
                      className="shadow-xl rounded-lg h-auto align-middle border-none max-w-full"
                    />
                  </div>
                  {/* FIX: Using a new container with proper padding and overflow-x-auto */}
                  <div className="flex space-x-2 overflow-x-auto p-2 rounded-lg bg-gray-50 border border-gray-200">
                    <img
                      alt="Thumbnail 1"
                      src={sampleImageUrl}
                      className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
                    />
                    <img
                      alt="Thumbnail 2"
                      src={sampleImageUrl}
                      className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
                    />
                    <img
                      alt="Thumbnail 3"
                      src={sampleImageUrl}
                      className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
                    />
                    <img
                      alt="Thumbnail 4"
                      src={sampleImageUrl}
                      className="w-20 h-20 flex-shrink-0 rounded-lg cursor-pointer border-2 border-transparent hover:border-lightBlue-500 transition-all duration-150 ease-linear"
                    />
                  </div>
                </div>

                {/* Product Details Section */}
                <div className="w-full md:w-6/12 px-4 py-5">
                  <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Product Name
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    This is a short description of the product. It can be a few sentences long and highlight the main features and benefits. You can use this space to provide a compelling summary.
                  </p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-lightBlue-600">
                      $99.99
                    </span>
                  </div>
                </div>
              </div>

              {/* Detailed Description Section */}
              <div className="flex flex-wrap mt-10">
                <div className="w-full px-4">
                  <h4 className="text-xl font-semibold leading-normal mt-0 mb-2 text-blueGray-700">
                    Product Details
                  </h4>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    A more detailed description of the product goes here. This section can include specifications, materials, dimensions, and other important information. It's a great place to provide a thorough overview for your customers.
                  </p>
                  <ul className="list-disc list-inside text-blueGray-600">
                    <li>Feature one: Benefit of this feature.</li>
                    <li>Feature two: Benefit of this feature.</li>
                    <li>Feature three: Benefit of this feature.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
