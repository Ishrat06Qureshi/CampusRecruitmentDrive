import React  from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {  Switch , Route} from "react-router-dom"
import Home from "./home"
import Login from "./helperComponents/Login"
import Dashboard from "./studentModule/studentDashboard"
import Viewjob from "./studentModule/viewJob"
import  Applyjob from "./studentModule/applyJob";
import Post from "./companyModule/post";
import Candidates from "./companyModule/listofstudents";
import Companyprofile from "./studentModule/CompanyProfile";


import Candidatesignup from "./studentModule/Signup";
import Companysignup from "./companyModule/CompanyRegistration";
import AdminRegistration from "./adminModule/AdminRegistration";


import Studentview from "./adminModule/studentDetailsView"
import Jobaccess from "./adminModule/jobAccess"
import Companyaccess from "./adminModule/companyAccess"
import Studentdetailsremove from "./adminModule/studentDetailsDelete"
import Companydetailsremove  from "./adminModule/companyDetailsDelete"
import Jobdetailsremove  from "./adminModule/jobDetailsDelete"

function App() {
  
  return (
    <div className="App">
    <Switch>
      <Route  exact path="/" component={ Home }/>
      <Route path="/login" component = { Login }/>
      <Route path="/Dashboard" component = { Dashboard }/>
      <Route path="/ViewJob" component = { Viewjob }/>
      <Route path="/ApplyJob" component = { Applyjob }/>
      <Route path="/post" component = { Post }/>
      <Route path="/candidates" component = { Candidates }/>
      <Route path="/candidateRegistration" component = { Candidatesignup }/>
      <Route path="/companyRegistration" component = { Companysignup }/>
      <Route path="/adminRegistration"  component = { AdminRegistration }/>
      <Route path="/comapnyprofile"  component = { Companyprofile }/>
      <Route path="/studentAcces"  component = {Studentview}/>
      <Route path="/studentdetailsremove"  component = { Studentdetailsremove}/>
      <Route path="/companyAccess"  component = { Companyaccess}/>
      <Route path="/jobAccess"  component = { Jobaccess }/>
      <Route path="/companydetailsremove"  component = { Companydetailsremove }/>
      <Route path="/jobdetailsremove"  component = { Jobdetailsremove }/>
      
    </Switch>
     
    </div>
  );
}


export default App;
