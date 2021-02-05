import React from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardDesign , DsahboardTop } from './style'
import { MdDashboard } from "react-icons/md";
import { AiOutlineOrderedList, AiOutlineUsergroupAdd } from "react-icons/ai"
import {FaStore, FaProductHunt, FaRegListAlt } from "react-icons/fa"
import { IoStatsChart } from "react-icons/io5"
const  Dashboard = () =>  {
    return (
        <DashboardDesign className="back-black col-2">
            <DsahboardTop className="dashboard-top mb-5 py-3 text-center text-white">
                <span>FullBox</span>
            </DsahboardTop>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <MdDashboard className="mr-2 font-md"></MdDashboard>
                        dashboard
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <FaStore className="mr-2 font-md"></FaStore>
                        store
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <FaProductHunt className="mr-2 font-md"></FaProductHunt>
                        products
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <AiOutlineOrderedList className="mr-2 font-md"></AiOutlineOrderedList>
                        orders
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <FaRegListAlt className="mr-2 font-md"></FaRegListAlt>
                        categories
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <AiOutlineUsergroupAdd className="mr-2 font-md"></AiOutlineUsergroupAdd>
                        users
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/" className="nav-link text-white text-capitalize">
                        <IoStatsChart className="mr-2 font-md"></IoStatsChart>
                        statics
                    </NavLink>
                </li>
            </ul>
        </DashboardDesign>
    )
}

export default Dashboard
