import React, { useState } from "react";
import axios from "axios";
import './Contact.css';
import './App.css';

function Contact() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/xyynbnyr",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <div>
            <div id="Contact">
                <h2>Contact Me</h2>
                <div className="Line"></div>
                <p className="form-intro">Thank you for taking the time to look through my works and portfolio.</p>
                <div className="form-div">
                    <form className="actual-form" onSubmit={handleOnSubmit}>
                        <p className="form-message">Let's Talk! Please fill out your details below and a brief message</p>

                        <input id="name" type="name" name="name" className="input" placeholder="First and Last Name" required />

                        <input id="email" type="email" name="email" className="input" placeholder="Email@YourAddress.com" required />

                        <input id="phone" type="phone" name="phone" className="input" placeholder="Phone Number ex. 000-000-0000" />

                        <label htmlFor="message" className="label">Message:</label>
                        <textarea id="message" name="message" className="input" placeholder="I'd like to talk to you about..."></textarea>

                        <button className="Contact-Button" type="submit" disabled={serverState.submitting}>Submit</button>
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
            <div className="banner">
                <a href='/'>Home</a>
                <a href='#Explanation'>About</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contact'>Contact</a>
            </div >
        </div>
    );
};

export default Contact;