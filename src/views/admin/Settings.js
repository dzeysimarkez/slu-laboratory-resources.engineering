import React, { useState, useEffect } from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
// import CardUserList from "components/Cards/CardUserList.js";
//import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        localStorage.removeItem('user');
      }

    }
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardSettings user={user} />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          {/* <CardUserList /> */}
        </div>
      </div>
    </>
  );
}
