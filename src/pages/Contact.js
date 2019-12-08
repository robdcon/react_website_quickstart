import React, { Component } from 'react';


const fields =
{
  sections:
  [
    [ // col 1
      {
       
        name:"name",
        placeholder:"Name",
        required:"required",
        errorMessage:"This field is required",
        value:"name",
        type:"text"
      },
      {
       
        name:"email",
        placeholder:"Email",
        required:"required",
        errorMessage:"This field is required",
        value:"email",
        type:"text"
      },
      {
       
        name:"phone",
        placeholder:"Phone",
        required:"required",
        errorMessage:"This field is required",
        value:"phone",
        type:"text"
      }
    ],
    [ // col 2
      {
       
        name:"message",
        placeholder:"Message",
        required:"trequired" ,
        errorMessage:"This field is required",
        value:"message",
        type:"textarea"
      }
    ]
  ]
}



class Contact extends Component
{

    

    render() 
    {
      return (
        <div>
         

          <section className="page-section" id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <form id="contactForm" name="sentMessage" onSubmit={this.props.handleSubmit}>
                      <div className="row">
                         
                        </div>
                    
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                          <div id="success"></div>
                          <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" onClick={this.sendForm}>Send Message</button>
                        </div>
                     
                    </form>
                  </div>
                </div>
              </div>
            </section>
        </div>
      );
    }
  }
  
  export default Contact