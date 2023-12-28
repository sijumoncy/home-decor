import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className="login__container">
      <h4>Login</h4>
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
          className="password"
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
        />

        <button className="login-btn">Login</button>
      </form>

        <div className="noaccount-acc">
            <span>Not Signed Up Yet? </span>
            &nbsp;&nbsp;
            <Link href="/signup">SignUp</Link>
            &nbsp;&nbsp;
            <span>Now</span>
        </div>

    </div>
  )
}

export default Login