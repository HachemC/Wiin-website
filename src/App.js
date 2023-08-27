import {logo} from './logo.svg';
import './App.css';
import { Register } from './register';
import{ForgotPass} from './forgetpass';
import { Login } from './login';
import React,{useState} from 'react';
import { ContactUs } from './contactus';

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
import { JobsPageAR } from './ArabicV/JobsPageAR';
import { UserProfileAR } from './ArabicV/ProfileDetailsAR';
import SelectedJobPageAR from './ArabicV/SelectedJobPageAR';
import { ContactUsAR } from './ArabicV/ContactUsAR';
import ChatStartAR from './ArabicV/chatpageAR';
import HeaderAr from './ArabicV/HeaderAr';
import Header from './header';
import ProtectedRoute from './ProtectedRoute';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';






function App() {
  
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAuthenticated');
  };

  const handleAddJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };
  useEffect(() => {
    // Check if a user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(isAuthenticated === 'true');
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  
  if (isLoading) {
    // You can render a loading indicator here
    return <div>Loading...</div>;
  }
  
  return (
    <Router>
      <div className="App">
        <Switch>
       
   
     
       <Route path="/login">
          <Login onLogin={() => setIsLoggedIn(true)} />
        </Route>
         
          < Route path="/register"   component={Register} />
          <Route path="/forgetpass"  component={ForgotPass} />

          <ProtectedRoute
            path="/posting"
            component={PostingComponent}
            isLoggedIn={isLoggedIn}
          />

          <ProtectedRoute
            path="/contactus"
            component={ContactUs}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/profileDetails"
            component={UserProfile}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/Jobspage"
            component={() => <JobsPage jobs={jobs} onAddJob={handleAddJob} />}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/job/:title"
            component={() => <SelectedJobPage jobs={jobs} />}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/chatpage"
            component={ChatStart}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/postingAR"
            component={PostingComponentAr}
            isLoggedIn={isLoggedIn}
          />
          <Route path="/loginAR"    component={LoginAR} />
          <Route path="/registerAR" component={RegisterAR} />
          <Route path="/forgotAr" component={ForgotPassAR} />
          <Route path="/ContactUsAr" component={ContactUsAR} />
          <Route path="/profileDetailsAR" component={UserProfileAR} />
          <Route path="/JobspageAR" component={() => <JobsPageAR jobs={jobs} onAddJob={handleAddJob} />} />
          <Route
            path="/selectedjobAR/:title"
            render={(props) => <SelectedJobPageAR jobs={jobs} {...props} />}
          />
          <Route path="/chatpageAR" component={ChatStartAR} />

          <Redirect exact from="/" to="/login" />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;