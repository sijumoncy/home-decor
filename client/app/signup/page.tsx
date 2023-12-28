import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <div className="signup__container">
      <h4>Sign Up</h4>
      <form>
        <input
          className="username"
          name="username"
          id="username"
          type="text"
          placeholder="username"
          required
        />

        <input
          className="name"
          name="name"
          id="name"
          type="text"
          placeholder="name"
          required
        />

        <input
          className="email"
          name="email"
          id="email"
          type="email"
          placeholder="email"
          required
        />

        <input
          className="password"
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
        />

        <button className="sign-btn">Sign Up</button>
      </form>

        <div className="existing-acc">
            <span>Aleady have account? </span>
            &nbsp;&nbsp;
            <Link href="/login">Login Now</Link>
        </div>

    </div>
  );
}

export default SignUp;
