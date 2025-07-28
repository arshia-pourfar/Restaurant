// import {
//   FiChevronDown,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { foodCategory } from "../App";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";

// const NavLink = styled(Link)`
//     color: #808080;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;
// `;

// const StaggeredDropDown = () => {
//   const [open, setOpen] = useState(false);

//   const foodCatList = foodCategory.map(cat =>
//     <Option key={cat.id} setOpen={setOpen} Icon={cat.foodIcon} text={cat.foodName} />
//   );
//   return (
//     <>
//       <div className={open ? "container-dropdown" : ""} onClick={() => setOpen((pv) => !pv)}></div>
//       <ul className="dropdown z-10 cursor-pointer">
//         <motion.div animate={open ? "open" : "closed"} className="relative">
//           <li
//             onClick={() => setOpen((pv) => !pv)}
//             className="flex items-center font-medium transition-colors"
//           >
//             <span className="tracking-wider">Menu</span>
//             <motion.span variants={iconVariants} className="inline-block top-1 relative left-1">
//               <FiChevronDown />
//             </motion.span>
//           </li>

//           <motion.ul
//             initial={wrapperVariants.closed}
//             variants={wrapperVariants}
//             style={{ originY: "top", translateX: "-50%" }}
//             className="flex flex-col py-0 rounded-lg w-[220px] bg-white shadow-2xl z-10 absolute top-[180%] left-[150%] w-[100%] overflow-hidden"
//           >
//             {foodCatList}
//           </motion.ul>
//         </motion.div>
//       </ul>
//     </>
//   );
// };

// const Option = ({ text, Icon, setOpen }) => {
//   return (
//     <motion.li
//       variants={itemVariants}
//       onClick={() => setOpen(false)}
//       className="dropdown-item flex items-center gap-1 w-full border-0 text-base font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-sky-500 transition-colors cursor-pointer"
//     >
//       <NavLink
//         to="/menu"
//         className='text-black p-0'
//       >
//         <motion.span>
//           <Icon className='text-lg' />
//         </motion.span>
//         <span>{text}</span>
//       </NavLink>
//     </motion.li>
//   );
// };

// export default StaggeredDropDown;

// const wrapperVariants = {
//   open: {
//     scaleY: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//     },
//   },
//   closed: {
//     scaleY: 0,
//     transition: {
//       when: "afterChildren",
//       staggerChildren: 0,
//     },
//   },
// };

// const iconVariants = {
//   open: { rotate: 180 },
//   closed: { rotate: 0 },
// };

// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       when: "beforeChildren",
//     },
//   },
//   closed: {
//     opacity: 0,
//     y: -15,
//     transition: {
//       when: "afterChildren",
//     },
//   },
// };