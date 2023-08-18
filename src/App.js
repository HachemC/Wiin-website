import {logo} from './logo.svg';
import './App.css';
import { Register } from './register';
import{ForgotPass} from './forgetpass';
import { Login } from './login';
import React,{useState} from 'react';
import "./loginstyle.css";
import"./registerstyle.css";
import"./radiostyle.css";
import"./forgetPassStyle.css";
import { ContactUs } from './contactus';
import "./contactus.css";
import {Header} from './header';
import "./searchbarre.css";
import { PostingComponent } from './posting';
import './postingstyle.css';
import {Post} from './post';
import './post.css';
import "./readmoretxt.css";
import {ProfilePicture} from "./profilepic.jsx";
import"./profilepicstyle.css"
import { UserProfile } from './profiledetails';
import "./profileDetailsStyle.css";
import {JobsPage} from './JobsPage';
import'./Job.css';
import "./jobspage.css";
import "./jobform.css"
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import  { useEffect } from "react";


import JobDetails from "./jobdetails";
import SelectedJobPage from "./SelectedJobPage";
import ChatStart from './ChatPage';
import "./ChatPage.css";






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
          <Route path="/login" component={Login} />
          <Route path="/posting" component={PostingComponent} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpass" component={ForgotPass} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/profiledetails" component={UserProfile} />
          <Route path="/jobspage" component={() => <JobsPage jobs={jobs} onAddJob={handleAddJob} />} />
          <Route path="/job/:title" component={() => <SelectedJobPage jobs={jobs} />} />
          <Route path="/ChatPage" component={ChatStart} />
          <Redirect exact from="/" to="/Login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

