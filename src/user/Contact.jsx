import React, { useState, useRef } from "react";
import "./Home.css";
import emailjs from "emailjs-com";

import Lottie from "lottie-react";
import contactm from "../assets/contactm.json";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cm13tur",
        "template_zu6hz56",
        form.current,
        "1HGh5c_iXt6MJgouM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Send Successfully | Thank You", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="row contact">
          <div className="col-md-6">
            <Lottie animationData={contactm} loop={true} />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage mx-auto text-center">
                  <h2>Contact Now</h2>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <label className="form-label">Name</label>
              <input className="form-control" type="text" name="user_name" />
              <label className="form-label">Email</label>
              <input className="form-control" type="email" name="user_email" />
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" />
              <input
                className="btn btn-outline-primary my-4"
                type="submit"
                value="Send Email"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
