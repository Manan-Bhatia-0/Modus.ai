import React, { useState } from "react";
import { Grid } from '@mui/material';
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_5b14yai";
      const templateId = "template_vo3xa34";
      const userId = "user_saHkHIC9enbzT47wydkDn";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Some fields are missing!");
    }
  };

  return (
    <div id="contact-form">
      <Grid container direction="column">
        <Grid item>
          <h2 style={{marginTop: "3rem", marginBottom: "3rem"}}>
            Contact Us
          </h2>
        </Grid>
        <Grid item container>
          <Grid item>
            <textarea
              type="text"
              style={{width: 250}}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item style={{marginLeft: "2rem"}}>
            <textarea
              type="email"
              style={{width: 400}}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <textarea
            placeholder="Message"
            value={message}
            style={{width: 683, height: 300}}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Grid>
        <Grid item>
          <button className="contactUsButton" onClick={submit} style={{marginTop: 300, marginLeft: 500}}>Send</button>
        </Grid>
        {/* <Grid item>
          <span className={emailSent ? "visible" : null}>
            Thank you so much for the feedback!
          </span>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Contact;
