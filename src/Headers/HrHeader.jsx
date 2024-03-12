import React from 'react'
import './HrHeader.css'
export default function HrHeader() {
  return (
    <div>
      <div className='logo'>
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
      
      <div className='main-options'>
        <div className='dash-board-options'><a className="nav-link active" aria-current="page" href="/investors">Investors</a></div>
        <div className='dash-board__optons'><a className="nav-link" href="/mutualfunds">Mutual Funds</a></div>
        <div className='dash-board__optons'><a className="nav-link" href="/thematicfunds">Thematic Funds</a></div>
        <div className='dash-board__optons'><a className="nav-link" href="/funds">Company</a></div>
      </div>
      </div>
    {/* <header>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    <a className="navbar-brand" href="#home" ><h3>Future Finance</h3></a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/investors">Investors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mutualfunds">Mutual Funds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/thematicfunds">Thematic Funds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/funds">Company</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header> */}
    </div>
  )
}
