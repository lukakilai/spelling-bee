import React from "react";

import { handleRefresh } from "helpers";

export default function RefreshButton() {
  return (
    <button
      type="button"
      className="bg-orange-100 hover:bg-orange-200 text-orange-700"
      onClick={handleRefresh}
    >
      სხვა სიტყვა
    </button>
  );
}
