import React, { useState } from 'react'
import transition from '../transition'

const ContactMe = () => {
  const [ok, setOk] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f628472a-5a0f-4498-a10d-4499920955ed");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setOk(true)
    }
  };

  return (
    <>
    <img className={ ok ? 'okk' : 'ok'} src="/portfolio-img/me-ok-removebg.png" alt="3d man" />
      <div className={ ok ? 'contact-ok' : 'contact'}>
        <img src="/public/portfolio-img/me 5_prev_ui.png" alt="3d man" />
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder='Name' />
          <input type="email" name="email" placeholder='Email'/>
          <textarea name="message" rows={5} placeholder='Message...'></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </>
  );
}

export default transition(ContactMe)