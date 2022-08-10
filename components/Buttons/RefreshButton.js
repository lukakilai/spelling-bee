import React from "react";

export default function RefreshButton({ onClick }) {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-orange-500 hover:bg-orange-400 hover:shadow-md transition-all duration-150 text-white rounded-lg"
      onClick={onClick}
    >
      სხვა სიტყვა
    </button>
  );
}
