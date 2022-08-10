import React from "react";

export default function CheckButton({ onClick }) {
  return (
    <button
      type="button"
      className="bg-blue-700 hover:bg-blue-600"
      onClick={onClick}
    >
      შეამოწმე
    </button>
  );
}
