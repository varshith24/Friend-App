import React from 'react'
import img from '../photos/loo.png'
import { AddFriend } from './AddFriend'

export const NavBar = ({ darkMode, setDark }) => {
    return (

        <nav className={`navbar navbar-${!darkMode ? "light" : "dark"} ${darkMode ? "bg-dark" : null}`} style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={img} alt="" width="30" height="24" className="d-inline-block align-text-top" style={{ marginRight: "10px" }} />
                    {/* Bootstrap */}
                    FriendHub
                </a>
                <div className="ms-auto">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <AddFriend darkMode={darkMode} />
                        </div>
                        <button style={{ marginLeft: '10px' }} type='button' className={`btn btn-${!darkMode ? "light" : "dark"} btn-outline-dark custom-btn`}
                            onClick={() => {
                                setDark(!darkMode)
                            }}
                        >
                            {darkMode ? <i className="fa-solid fa-sun" style={{ color: "#fff" }}></i> : <i className="fa-solid fa-moon"></i>}
                        </button>
                    </div>

                </div>
            </div>
        </nav>

    )
}
