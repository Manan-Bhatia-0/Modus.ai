import React, { useState } from "react";
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
      <h2>
      <br></br>
        Contact Us
        </h2>
      <br></br>
      <textarea
        type="text"
        placeholder="Name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <textarea
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="contactUsButton" onClick={submit}>Send</button>
      <span className={emailSent ? "visible" : null}>
       <br></br> <br></br> <br></br> <br></br>Thank you so much for the feedback!
      </span>
    </div>
  );
};

export default Contact;
