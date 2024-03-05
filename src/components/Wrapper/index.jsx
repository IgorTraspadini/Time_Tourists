import React from "react";

function Wrapper({ children, className }) {
  // Combines existing classes with any classes passed via className prop
  return <div className={`w-full md:w-1/2 md:min-h-[85vh] p-4 ${className}`}>{children}</div>;
}

export default Wrapper;
