// import React   from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const Li = styled.li`
//     cursor: pointer;
//     .dropdown-menu.active {
//         display: block;
//     };
// `
// const Dropdown = props => {
//     const items = props.items
//     let DropdownItems = items.map(() => {
//         return <Link className="dropdown-item back-white" to="/" key={Math.random()}>Action</Link>
//     }); 
//     const ToggleMenu = e => {
//         e.target.nextElementSibling.classList.toggle("active")
//     }
//     document.documentElement.onclick = e => {
//         if (!e.target.classList.contains("toggle-drop")) {
//             document.querySelector(".dropdown-menu").classList.remove("active")
//         }
//     }
//     return (
//         <Li className="nav-item dropdown">
//             <div className="nav-link toggle-drop" to="/" onClick={ToggleMenu}>
//                 categories 
//             </div>
//             <div className='dropdown-menu'>
//                 {DropdownItems}
//             </div>
//         </Li>
//     )
// }

// export default Dropdown
