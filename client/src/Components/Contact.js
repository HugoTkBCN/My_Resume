import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import $ from 'jquery';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var title = this.props.data.navigation.contact;
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
         var titlename = this.props.data.contact.name;
         var titleemail = this.props.data.contact.email;
         var titlesubject = this.props.data.contact.subject;
         var titlemessage = this.props.data.contact.message;
         var titlesubmit = this.props.data.contact.submit;
         var titlecontact = this.props.data.titleContactDetails;
      }

      function sendEmail(e) {
         e.preventDefault();
         $('#image-loader').fadeIn();

         emailjs.sendForm('service_6ml56yk', 'template_1e96afi', e.target, 'user_ntyNbZYiW9Sm6Wg5yoyH6')
            .then((result) => {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
               $('#image-loader').fadeOut();
               $('#message-warning').html(error.text);
               $('#message-warning').fadeIn();
            });
      }
      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>{title}</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={sendEmail} id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">{titlename} <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="user_name" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">{titleemail} <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="user_email" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">{titlesubject}</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">{titlemessage} <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                        </div>

                        <div>
                           <button className="submit">{titlesubmit}</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>{titlesubmit}<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>{titlecontact}</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        {phone}<br />
                        {email}
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
