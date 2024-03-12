import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <div>
    <header>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    <a className="navbar-brand" href="/Home" ><h2>Future Finance</h2></a>
    
    <div className='main-options'>
        
        <div className='dash-board-options'><a className="nav-link active" aria-current="page" href="/investors">Investors</a></div>
        <div className='dash-board__optons'><a className="nav-link" href="/funds">Company</a></div> 
        <div className='dash-board__optons'><a className="nav-link" href="/mutualfunds">Mutual Funds</a></div>
        <div className='dash-board__optons'><a className="nav-link" href="/thematicfunds">Thematic Funds</a></div>
        
      </div>
    <div className='searchbar'>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
    </header>
    </div>
  )
}
