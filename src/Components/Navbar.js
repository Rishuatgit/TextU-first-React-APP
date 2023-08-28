import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';





Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  aboutText: Proptypes.string
}

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about text here"
};

export default function Navbar(prop) {

  return (
    <>
      <nav className={`navbar shadow-sm  border-bottom      navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}  `}>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="">{prop.title}</a> */}
          <button className="navbar-toggler flex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="">Home</a> */}

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{prop.aboutText}</Link>
              </li>
            </ul>
          </div>
        </div>
       <div className="d-flex">
        <div className="bg-primary   rounded mx-2" onClick={()=>prop.toggleMode('primary')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>
        <div className="bg-danger  rounded mx-2" onClick={()=>prop.toggleMode('danger')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>
        <div className="bg-success  rounded mx-2" onClick={()=>prop.toggleMode('success')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>
        <div className="bg-warning  rounded mx-2" onClick={()=>prop.toggleMode('warning')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>
        <div className="bg-light  rounded mx-2" onClick={()=>prop.toggleMode('light')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>
        <div className="bg-dark  rounded mx-2" onClick={()=>prop.toggleMode('dark')} style={{height:'30px', width:'30px',cursor:'pointer',border:'solid 2px pink' }}></div>

            
       </div>
        {/* <div className={`form-check form-switch text-${prop.mode === 'dark' ? 'light' : 'dark'} `}>
          <input onClick={()=>prop.toggleMode(null)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`text-light form-check-label text-${prop.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Toggle mode</label>
        </div> */}
      </nav>

    </>


  )
}