import React from "react";

export default function RefreshButton({ onClick }) {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-orange-700 hover:bg-orange-600 hover:shadow-md transition-all duration-75 text-white rounded-lg"
      onClick={onClick}
    >
      სხვა სიტყვა
    </button>
  );
}
