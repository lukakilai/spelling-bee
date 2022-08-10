import React from "react";

export default function RefreshButton({ onClick }) {
  return (
    <button
      type="button"
      className="bg-orange-500 hover:bg-orange-400"
      onClick={onClick}
    >
      სხვა სიტყვა
    </button>
  );
}
