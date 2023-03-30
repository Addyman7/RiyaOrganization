import { useState } from "react";
import "./contacts.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>संपर्क सूत्र:-</h2>
        <h3>हनुमान सिंह खरेशिया </h3>
        <h3>📱+91 6367847154</h3>
        <h3> विजयपाल सिंह खरेशिया </h3>
        <h3>📱+91 9929065440</h3>
        <h3>राजेंद्र सिंह खरेशिया</h3>
        <h3>📱+91 8560997478</h3>
        {<form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> }
      </div>
    </div>
  );
}
