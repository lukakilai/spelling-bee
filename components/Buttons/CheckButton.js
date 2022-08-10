import React from "react";

export default function CheckButton({ onClick }) {
  return (
    <button
      type="button"
      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
      onClick={onClick}
    >
      შეამოწმე
    </button>
  );
}
