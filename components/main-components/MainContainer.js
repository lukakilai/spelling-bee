import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="w-full sm:w-max px-5 py-10 sm:px-10 sm:py-20 bg-white rounded-md shadow-md">
      {children}
    </div>
  );
}
