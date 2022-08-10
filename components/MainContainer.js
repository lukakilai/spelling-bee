import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="w-full sm:w-[512px] px-5 py-10 sm:p-15 bg-white rounded-md shadow-md">
      {children}
    </div>
  );
}
