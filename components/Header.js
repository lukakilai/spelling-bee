import React from "react";

export default function Header({ wordToSpell }) {
  return (
    <div className="w-full flex flex-col justify-start items-center space-y-4 mb-8">
      <p className="text-xl">დამისპელე სიტყვა</p>
      <p className="font-bold text-2xl">{wordToSpell}</p>
    </div>
  );
}
