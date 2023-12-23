import React, { Component } from 'react'
import './Card.css'
export default class Cards extends Component {
  render() {
      let {Name,facebook,linkdin,contact,position,insta,mail} = this.props;
    return (
            <div className='CardLength my-3'>
              <div className="card" style={{width: "auto"}}>
                {/* <img src={imageUrl?imageUrl : "https://i-invdn-com.investing.com/news/moved_LYNXMPEI0P13A_L.jpg"} className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h3 className="card-title"><u>{Name}</u></h3>
                        <h5><u>{position}</u></h5>
                        {/* <p className="card-text">{description}</p> */}
                        <h5>Contact Number : {contact}</h5>
                        <h5>Email ID: {mail}</h5>
                        <a href={insta} target='_blank' >Instagram account</a><br/>
                        <a href={facebook} target='_blank' >FaceBook account</a><br/>
                        <a href={linkdin} target='_blank' >Linkdin account</a>
                    </div>
              </div>
            </div>
    )
  }
}