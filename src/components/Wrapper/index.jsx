import React from "react";
// const Wrapper = React.forwardRef(({ children, className }, ref) => {
//   // Combines existing classes with any classes passed via className prop
//   return <div ref={ref} className={`w-full md:w-1/2 md:min-h-[85vh] p-4 ${className}`}>{children}</div>;
// });
// export default Wrapper;

const Wrapper = React.forwardRef(({ children, className, noPadding }, ref) => {
  const paddingClass = noPadding ? 'p-0' : 'p-4'; // Adjust default padding here
  return <div ref={ref} className={`w-full md:w-1/2 md:min-h-[85vh] ${paddingClass} ${className}`}>{children}</div>;
});

export default Wrapper;