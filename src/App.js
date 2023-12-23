import React from "react";

import "./index.css";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ContactUs from "./pages/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="App">
     <Router>
        <Switch>
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>
          <Route path="/">
            <ComingSoon />
          </Route>
        </Switch>
        
        </Router>
      </div>
    </>
  );
}
