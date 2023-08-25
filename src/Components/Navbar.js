import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';





export default function Navbar(prop) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}  `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{prop.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{prop.aboutText}</Link>
              </li>


            </ul>
            <form className="d-flex mx-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={`form-check form-switch text-${prop.mode === 'dark' ? 'light' : 'dark'} `}>
          <input onClick={prop.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`text-light form-check-label text-${prop.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
      </nav>

    </>


  )
}

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  aboutText: Proptypes.string
}

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about text here"
};