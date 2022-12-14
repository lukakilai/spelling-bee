import React, { Fragment } from "react";

export default function Header({ wordToSpell, allMatch }) {
  return (
    <div className="w-full flex flex-col justify-start items-center space-y-4 mb-8">
      {!allMatch && (
        <Fragment>
          <p className="text-center text-xl">๐ แแแแแกแแแแ แกแแขแงแแ</p>
          <p className="text-center font-bold text-2xl">{wordToSpell}</p>
        </Fragment>
      )}
      {allMatch && (
        <Fragment>
          <p className="text-center text-xl">
            ๐ แงแแฉแแฆ! แจแแ แฌแแ แแแขแแแแ แแแกแแแแ
          </p>
          <p className="text-center font-bold text-2xl">{wordToSpell}</p>
        </Fragment>
      )}
    </div>
  );
}
