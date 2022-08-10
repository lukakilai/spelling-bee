import React from "react";

export default function CheckButton({ onClick }) {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-blue-700 hover:bg-blue-600 hover:shadow-md transition-all duration-150 text-white rounded-lg"
      onClick={onClick}
    >
      შეამოწმე
    </button>
  );
}
