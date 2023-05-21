import React from 'react'
import './Home.css';


export const Contact = () => {
  return (
    <div>
      <div class="contact mt-5">

        <div class="row">
          <div class="col-md-12 pt-5">
            <div class="titlepage mx-auto text-center">
              <h2>Contact Now</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <form id="request" class="main_form">
              <div class="row">
                <div class="col-md-12 ">
                  <input class="contactus" placeholder="Name" type="type" name="Name"/>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Email" type="type" name="Email"/>
                </div>
                <div class="col-md-12">
                  <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>
                </div>
                <div class="col-md-12">
                  <textarea class="textarea" placeholder="Message" type="type" message="Name">Message </textarea>
                </div>

                <button class="send_btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}