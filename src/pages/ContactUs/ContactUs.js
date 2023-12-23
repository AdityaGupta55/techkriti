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
          "contact" :"9672334244",
          "position" : "Head Events & Competition",
           "mail" : "abhiyanshu@techkriti.org"
           

         },
         {
          "id":"4",
          "Name" : "Ambuj Payne",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8126376229",
          "position" : "Head Marketing",
           "mail" : "ambuj@techkriti.org"
           
         },
         {
          "id":"5",
          "Name" : "Amol Garg",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7351867690",
          "position" : "Head Marketing",
           "mail" : "amol@techkriti.org"
           
         },
         {
          "id":"6",
          "Name" : "Reeteswaroop Singh",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"9760944972",
          "position" : "Head Marketing",
           "mail" : "ritesh@techkriti.org"
           
         },
         {
          "id":"7",
          "Name" : "Garvit Digarwal",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8302479345",
          "position" : "Head Show Management",
           "mail" : "garvit@techkriti.org"
           
         },
         {
          "id":"8",
          "Name" : "Anurag Mandal",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"8697010179",
          "position" : "Head Show Management",
           "mail" : "anurag@techkriti.org"
           
         },
         {
          "id":"9",
          "Name" : "Shrey Sonara",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"9898921717",
          "position" : "Head Media and Publicity",
           "mail" : "shrey@techkriti.org"
           
         },
         {
          "id":"10",
          "Name" : "Jyotirmay",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"988936111",
          "position" : "Head Public Relations",
           "mail" : "jyotirmay@techkriti.org"
           
         },
         {
          "id":"11",
          "Name" : "Aakriti Gupta",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7303118950",
          "position" : "Head Public Relations",
           "mail" : "aakriti@techkriti.org"
           
         },
         {
          "id":"12",
          "Name" : "Chitwan Goel",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7310826277",
          "position" : "Head Web and App",
           "mail" : "abhiyanshu@techkriti.org"
           
         },
         {
          "id":"13",
          "Name" : "Tejaswa Mathur",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"9761580119",
          "position" : "Head Web and App",
           "mail" : "abhiyanshu@techkriti.org"
           
         },
         {
          "id":"14",
          "Name" : "Ansh Jat",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"6269628903",
          "position" : "Head Finance",
           "mail" : "ansh@techkriti.org"
           
         },
         {
          "id":"15",
          "Name" : "Sakshi Patil",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7898849252",
          "position" : "Head Design",
           "mail" : "sakshi@techkriti.org"
           
         },
         {
          "id":"16",
          "Name" : "Nayan Khadelwal",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"9079952562",
          "position" : "Head Transport",
           "mail" : "sakshi@techkriti.org"
         },
         {
          "id":"17",
          "Name" : "Ankur Maurya",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"9536677057",
          "position" : "Head Security",
           "mail" : "ankurmaurya@techkriti.org"
         },
         {
          "id":"18",
          "Name" : "Vihan Kochatta",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7898849252",
          "position" : "Festival Coordinator",
           "mail" : "sakshi@techkriti.org"
         },
         {
          "id":"19",
          "Name" : "Anand Maneesh",
          "facebook" : "https://www.facebook.com/abhiyanshu.kumar.90?mibextid=ZbWKwL",
          "linkdin" : "http://linkedin.com/in/abhiyanshuk2001",
          "insta" : "https://www.instagram.com/__abhi__6212/",
          "contact" :"7898849252",
          "position" : "Festival Coordinator",
           "mail" : "sakshi@techkriti.org"
         }
        
      ],
     
    };
  }

  render() {
    return (
      <div className='container my -3'>
        <h2 className='centered my-4 mx-auto' style={{color:'black'}}>
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
