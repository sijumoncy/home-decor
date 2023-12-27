"use client";
import React, { useState } from "react";

function EmailSubscribe() {
  const [email, setEmail] = useState('');

  return (
    <div className="email__container">
      <input
        className="email-input"
        id="email-input"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value) }
        placeholder="email address"
      />
      <button className="sub-btn">Subscribe</button>
    </div>
  );
}

export default EmailSubscribe;
