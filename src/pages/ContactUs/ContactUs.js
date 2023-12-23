import React, { Component } from 'react';
import "./ContactUs.css";
import Card from '../../components/Card/Card';

class ContactUs extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        {
          "id":"1",
          "Name" : "Raghav Modani",
          "insta" : "https://www.instagram.com/raghavm_910?igsh=YTQwZjQ0NmI0OA==",
          "linkdin" : "https://www.linkedin.com/in/raghav-modani-633811214/m",
          "facebook" : "https://www.facebook.com/raghav.modani.35?mibextid=9R9pXOom",
          "contact" :"7357617960",
          "position" : "Head Events & Competition",
           "mail" : "raghavm@techkriti.org"
           
        },
         {
          "id":"2",
          "Name" : "Nikund Jain",
          "facebook" : "https://www.facebook.com/raghav.modani.35?mibextid=9R9pXO",
          "linkdin" : "https://www.linkedin.com/in/raghav-modani-633811214/",
          "insta" : "https://www.instagram.com/raghavm_910?igsh=YTQwZjQ0NmI0OA==",
          "contact" :"8126376229",
          "position" : "Head Events & Competition",
           "mail" : "nikund@techkriti.org"
           
         },
         {
          "id":"3",
          "Name" : "Abhiyanshu Kumar",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8126376229",
          "position" : "Head Events & Competition",
           "mail" : "abhiyanshu@techkriti.org"
           

         },
         {
          "id":"3",
          "Name" : "Abhiyanshu Kumar",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8126376229",
          "position" : "Head Events & Competition",
           "mail" : "abhiyanshu@techkriti.org"
           
         },
         {
          "id":"4",
          "Name" : "Amol Garg",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8126376229",
          "position" : "Head Events & Competition",
           "mail" : "abhiyanshu@techkriti.org"
           
         },
         { 
          "id":"3",
          "Name" : "Ambuj Pyne",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8126376229",
          "position" : "Head Events & Competition",
           "mail" : "abhiyanshu@techkriti.org"
           

         }
        
      ],
     
    };
  }

  render() {
    return (
      <div className='container my -3'>
        <h2 className='centered my-4 mx-auto'>
          CONTACT US
        </h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <Card Name={element.Name} facebook={element.facebook } linkdin={element.linkdin} contact={element.contact} position={element.position} insta={element.insta} mail= {element.mail}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContactUs;
