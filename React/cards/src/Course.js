import React from "react";

export const Course = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
    </div>
  );
};

// export const Course = ({ title, description }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{description}</div>
//     </div>
//   );
// };
