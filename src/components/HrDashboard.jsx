import React from 'react'
import './HrDashboard.css'
import Graph from './Graph'
import Graph1 from './Graph1'
import CompanyStatistics from './CompanyStatistics'
const HrDashboard = () => {
  return (
    <div>
      <div className='maintitle'>
      <h1>HR DASHBOARD</h1>
      </div>
      <div className='title'>
      
      <div className='graphs'>
      <div className='mutualgraph'>
        <h3>Mutual fund Graph</h3>
      {<Graph/>}
      </div>
      <div className='mutualgraph1'>
      <h3>Thematic fund Graph</h3>
        {<Graph1/>}
      </div>
      <div className='table'>
        {<CompanyStatistics/>}
      </div>
      </div>
      
    </div>

    </div>
    
    
  )
}

export default HrDashboard
