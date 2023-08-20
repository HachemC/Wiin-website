import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";

import { PostingComponentAr } from "./PostingAr";
import { LoginAR } from "./LoginAr";
import { RegisterAR } from "./registerAR";
import { ForgotPassAR } from "./forgotAr";
import { JobsPageAR } from "./JobsPageAR";
import { UserProfileAR } from "./ProfileDetailsAR";
import SelectedJobPageAR from "./SelectedJobPageAR";
import { ContactUsAR } from "./ContactUsAR";
import ChatStartAR from "./chatpageAR";

import { LanguageButtons } from "../LanguageButtons";

function AppAR() {
  const [jobs, setJobs] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("AR");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

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
        <LanguageButtons
          onLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
        <Switch>
          <Route path="/loginAr" component={LoginAR} />
          <Route path="/PostingAr" component={PostingComponentAr} />
          <Route path="/registerAR" component={RegisterAR} />
          <Route path="/forgotAR" component={ForgotPassAR} />
          <Route path="/ContactUsAR" component={ContactUsAR} />
          <Route path="/profileDetailsAR" component={UserProfileAR} />
          <Route
            path="/JobspageAR"
            component={() => <JobsPageAR jobs={jobs} onAddJob={handleAddJob} />}
          />
          <Route
            path="/selectedjobAR/:title"
            render={(props) => <SelectedJobPageAR jobs={jobs} {...props} />}
          />
          <Route path="/chatpageAR" component={ChatStartAR} />
          <Redirect exact from="/" to="/loginAr" />
        </Switch>
      </div>
    </Router>
  );
}

export default AppAR;
