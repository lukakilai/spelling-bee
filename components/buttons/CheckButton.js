import React from "react";

export default function CheckButton({ onClick }) {
  return (
    <button
      type="button"
      className="bg-blue-100 hover:bg-blue-200 text-blue-700 focus:outline focus:outline-offset-0 focus:outline-indigo-400"
      onClick={onClick}
    >
      შეამოწმე
    </button>
  );
}
