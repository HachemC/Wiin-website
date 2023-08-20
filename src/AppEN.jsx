import { logo } from "./logo.svg";
import "./App.css";
import { Register } from "./register";
import { ForgotPass } from "./forgetpass";
import { Login } from "./login";
import React, { useState, useEffect } from "react";
import { ContactUs } from "./contactus";

import { PostingComponent } from "./posting";
import { Post } from "./post";
import { ProfilePicture } from "./profilepic.jsx";
import { UserProfile } from "./profiledetails";
import { JobsPage } from "./JobsPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import JobDetails from "./jobdetails";
import SelectedJobPage from "./SelectedJobPage";
import ChatStart from "./ChatPage";
import "./ChatPage.css";
import { LanguageButtons } from "./LanguageButtons";
import Header from "./header";

function AppEN() {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
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
        <LanguageButtons />
        <Header
          onLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/posting" component={PostingComponent} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpass" component={ForgotPass} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/profiledetails" component={UserProfile} />
          <Route
            path="/jobspage"
            component={() => <JobsPage jobs={jobs} onAddJob={handleAddJob} />}
          />
          <Route
            path="/job/:title"
            component={() => <SelectedJobPage jobs={jobs} />}
          />
          <Route path="/ChatPage" component={ChatStart} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppEN;
