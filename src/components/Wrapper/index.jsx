import React from "react";

function Wrapper({ children }) {
  return <div className="w-full md:w-1/2 md:min-h-[85vh] p-4">{children}</div>;
}

export default Wrapper;
