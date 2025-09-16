import React from "react";

// components

import AddUserForm from "components/Forms/AddUserForm";

export default function Maps() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
            <AddUserForm />
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <AddUserForm />
          </div> */}
        </div>
      </div>
    </>
  );
}
