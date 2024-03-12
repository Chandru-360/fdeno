import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { ListCompany } from './components/ListCompany';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import AddCompany from './components/AddCompany';
import Listinvestors from './components/Listinvestors';
import AddInvestor from './components/AddInvestor';
import ListMutualFunds from './components/ListMutualFunds';
import AddMutualfund from './components/AddMutualfund';
import ListThematicFunds from './components/ListThematicFunds';
import AddThematicfund from './components/AddThematicfunds';
import HrHeader from './Headers/HrHeader';
import HrDashboard from './components/HrDashboard';
import Graph from './components/Graph';
import Graph1 from './components/Graph1';
import CompanyStatistics from './components/CompanyStatistics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="conatiner">
        <Routes>
          <Route path="/" element={<CompanyStatistics/>} />
          <Route path="/Home" element={<HrDashboard/>} />
          <Route path="/funds" element={<ListCompany/>} />
          <Route path="/investors" element={<Listinvestors/>} />
          <Route path="/mutualfunds" element={<ListMutualFunds/>}/>
          <Route path='/thematicfunds' element={<ListThematicFunds/>}/>
          <Route path="*" element={<Error/>} />
          <Route path="/addcompany" element={<AddCompany/>} />
          <Route path="/addinvestor" element={<AddInvestor/>} />
          {/* <Route path='/addmutualfund' element={<AddMutualFundPage/>}/> */}
          <Route path="/updatecompany/:id" element={<AddCompany/>} />
          <Route path="/updateinvestor/:id" element={<AddInvestor/>} />
          <Route path='/updatemutualfund/:id' element={<AddMutualfund/>}/>
          <Route path='/updatethematicfund/:id' element={<AddThematicfund/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
      {/* <Header/>
      <ListFunds/>
      <Footer/> */}
    </div>

      
  );
}

export default App;
