import React, { useState } from "react";
import "./Home.css";

import Lottie from "lottie-react";
import contactm from "../assets/contactm.json";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set up your email parameters
    const emailParams = {
      from_name: name,
      reply_to: email,
      to_name: "mostakidb@gmail.com", // Enter the recipient's name or email here
      subject: subject,
      message: message,
    };

    window.Email.send({
      ...emailParams,

      Host: "smtp.elasticemail.com",
      Username: "mostakidb@gmail.com",
      Password: "BB6E34AE292877F9AA90EAFF0B40653E744D",
      To: emailParams.to_name,
      From: emailParams.reply_to,
      Subject: emailParams.subject,
      Body: emailParams.message,
    })
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn text-center mb-2 btn-outline-primary"
              >
                Submit
              </button>
            </form>
            {/* <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        type="type"
                        message="Name"
                      >
                        Message
                      </textarea>
                    </div>

                    <button className="send_btn">Send</button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
