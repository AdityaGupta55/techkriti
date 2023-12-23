import React from 'react';
import Preloader from "../../components/Preloader/Preloader";
import Timer from "../../components/CountDown/Timer";
import Optin from "../../components/Optin/Optin";


export default function ComingSoon() {
  return (
    <div className="container">
      <br />
    <h1 style={{color: 'ivory'}}>
      Website
    </h1>
      <Timer />
    <h1 style={{color: "ivory"}}>  Coming Soon
    </h1>
      <Optin />
      <Preloader />
  </div>
  )
}
