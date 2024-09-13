// // components/Dropdown.js
// import { useState } from "react";

// export default function Dropdown({ trigger }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div style={{ position: "relative", display: "inline-block" }}>
//       <span onClick={toggleDropdown} style={{ cursor: "pointer" , marginRight: "10px"}}> 
//         {trigger}
//         FILTER
//       </span>
//       {isOpen && (
//         <ul
//           style={{
//             position: "absolute",
//             backgroundColor: "white",
//             boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
//             zIndex: 1,
//             listStyle: "none",
//             padding: "10px",
//             margin: "0",
//             marginTop: "5px",
//           }}
//         >
//           <li style={{ padding: "5px 10px" }}>Category 1</li>
//           <li style={{ padding: "5px 10px" }}>Category 2</li>
//           <li style={{ padding: "5px 10px" }}>Category 3</li>
//         </ul>
//       )}
//     </div>
//   );
// }
