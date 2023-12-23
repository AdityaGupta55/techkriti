import React from 'react';
import Preloader from "../../components/Preloader/Preloader";
import Timer from "../../components/CountDown/Timer";
import Optin from "../../components/Optin/Optin";


export default function ComingSoon() {
  return (
    <div className="container">
    <h1>
      Website
      <br />
      Coming Soon
    </h1>
    <Timer />
    <Optin />
    <Preloader />
  </div>
  )
}
