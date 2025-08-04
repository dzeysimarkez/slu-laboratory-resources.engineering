import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardUserList from "components/Cards/CardUserList.js";
//import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <CardUserList />
        </div>
      </div>
    </>
  );
}
