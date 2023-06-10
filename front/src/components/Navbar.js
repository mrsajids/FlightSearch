import React from 'react'
import { Link } from 'react-router-dom'
import planlogo from '../plainlogo.png'
import '../App.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow p-2 mb-5 rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://localhost:5000"><b> Flight Search App</b><img src={planlogo} alt="planlogo" className='planlogo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <Link to="/" className="nav-link active">Search</Link>

                            </li>
                            <li className="nav-item mx-3">

                                <Link to="about" className="nav-link active">About</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
