import React from "react";
const Wrapper = React.forwardRef(({ children, className }, ref) => {
  // Combines existing classes with any classes passed via className prop
  return <div ref={ref} className={`w-full md:w-1/2 md:min-h-[85vh] p-0 ${className}`}>{children}</div>;
});
export default Wrapper;