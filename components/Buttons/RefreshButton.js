import React from "react";

export default function RefreshButton({ onClick }) {
  return (
    <button
      type="button"
      className="bg-orange-100 hover:bg-orange-200 text-orange-700"
      onClick={onClick}
    >
      სხვა სიტყვა
    </button>
  );
}
