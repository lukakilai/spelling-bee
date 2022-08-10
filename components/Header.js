import React, { Fragment } from "react";

export default function Header({ wordToSpell, allMatch }) {
  return (
    <div className="w-full flex flex-col justify-start items-center space-y-4 mb-8">
      {!allMatch && (
        <Fragment>
          <p className="text-center text-xl">🐝 დამისპელე სიტყვა</p>
          <p className="text-center font-bold text-2xl">{wordToSpell}</p>
        </Fragment>
      )}
      {allMatch && (
        <Fragment>
          <p className="text-center text-xl">
            🏆 ყოჩაღ! შენ წარმატებით დასპელე
          </p>
          <p className="text-center font-bold text-2xl">{wordToSpell}</p>
        </Fragment>
      )}
    </div>
  );
}
