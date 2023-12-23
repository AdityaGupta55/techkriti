import React, { useEffect } from "react";
import "./index.css";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ContactUs from "./pages/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


export default function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/ContactUs");
  }, [history]);

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
