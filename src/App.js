import {logo} from './logo.svg';
import './App.css';
import { Register } from './register';
import{ForgotPass} from './forgetpass';
import { Login } from './login';
import React,{useState} from 'react';
import { ContactUs } from './contactus';
import {Header} from './header';
import { PostingComponent } from './posting';
import {Post} from './post';
import {ProfilePicture} from "./profilepic.jsx";
import { UserProfile } from './profiledetails';
import {JobsPage} from './JobsPage';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import  { useEffect } from "react";
import JobDetails from "./jobdetails";
import SelectedJobPage from "./SelectedJobPage";
import ChatStart from './ChatPage';
import "./ChatPage.css";
import { PostingComponentAr } from './ArabicV/PostingAr';
import { LoginAR } from './ArabicV/LoginAr';
import { RegisterAR } from './ArabicV/registerAR';
import { ForgotPassAR } from './ArabicV/forgotAr';






function App() {
  const [jobs, setJobs] = useState([]);
  
  const handleAddJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/loginAR" component={LoginAR} />
          <Route path="/postingAR" component={PostingComponentAr} />
          <Route path="/registerAR" component={RegisterAR} />
          <Route path="/forgotAr" component={ForgotPassAR} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/profiledetails" component={UserProfile} />
          <Route path="/jobspage" component={() => <JobsPage jobs={jobs} onAddJob={handleAddJob} />} />
          <Route path="/job/:title" component={() => <SelectedJobPage jobs={jobs} />} />
          <Route path="/ChatPage" component={ChatStart} />
          <Redirect exact from="/" to="/LoginAR" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

