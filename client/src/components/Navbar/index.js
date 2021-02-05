import React , {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import Dropdown from '../Ui/Dropdown'
import { FiUser } from 'react-icons/fi'

const NAvbarContent = styled.header`
    .nav-item .nav-link {
        color: #34495e;
        font-size: 15px;
        font-weight: 600;
    };
    .nav-item {
        position: relative;
    };
    .toggle-drop:hover .drop {
        display: block;
    }
    .drop {
        position: absolute;
        top: 40px;
        padding: 10px;
        background-color: #eeeeee;
        width: 250px;
        display: none;
    }
    .drop:hover {
        display: block;
    };
    .icon-content {
        background-color: #eeeeee;
        .navbar-icon {
            font-size: 25px;
        };
    }
    .user-drop-content {
        position: absolute;
        left: 0;
    }
`

const Navbar = () => {
    const [ toggle, changetoggle ] = useState(false)
    const openUserDrop = e => {
        toggle ? changetoggle(false) : changetoggle(true)
    }
    return (
        <NAvbarContent className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-white"><span className="text-black">Beau</span><span className="text-blue">Lock</span></NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link text-black" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item mr-3 toggle-drop">
                            <NavLink className="nav-link" to="/">Categories</NavLink>
                            <div className="drop">
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mr-3 ">
                            <NavLink className="nav-link" to="/">Shop</NavLink>
                        </li>
                        <li className="nav-item mr-3 toggle-drop">
                            <NavLink className="nav-link" to="/">pages</NavLink>
                            <div className="drop">
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link">jacket</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item mr-3 ">
                            <NavLink className="nav-link" to="/">Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-4">
                        <li className="nav-item position-relative">
                            <div className="rounded-circle icon-content p-2" onClick={openUserDrop}>
                                <FiUser className="navbar-icon"></FiUser>
                            </div>
                            {toggle ? <div className="user-drop-content">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">jacket</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">jacket</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn shadow-none text-danger p-1">Logout</button>
                                    </li>
                                </ul>
                            </div> : false}
                        </li>
                    </ul>
                </div>
            </div>
        </NAvbarContent>
    )
}


export default Navbar
