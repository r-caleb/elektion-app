import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div>
        <div className=" flex items-center justify-center ">{children}</div>
      </div>
    </>
  );
}
