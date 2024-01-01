"use client";
import LoaderLine from "@/components/utils/Loader/LoaderLine";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ErrorField from "@/components/utils/ErrorField";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const session = useSession();
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as {
      name: "password" | "email";
      value: string;
    };

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    setLoading(false)
    if (!response || response?.error) {
      setErrorText("Login failed. Invalid Credentials");
      if (response?.url) router.replace("/");
    } else {
      setErrorText("")
    }
  };

  useEffect(() => {
    if(session.status === "authenticated") {
      console.log({session});
      const {user} = session.data
      if(user?.isAdmin) {
        router.push('/admin')
      } else {
        router.push('/')
      }
    }
  },[session, router])

  return (
    <div className="login__container">
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="email"
          name="email"
          id="email"
          type="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="password"
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <ErrorField errorText={errorText} />

        {loading ? (
          <LoaderLine text="" primaryColor="#808080" secondaryColor="#adaaaa" />
        ) : (
          <button className="login-btn">Login</button>
        )}
      </form>

      <div className="noaccount-acc">
        <span>Not Signed Up Yet? </span>
        &nbsp;&nbsp;
        <Link href="/signup">SignUp</Link>
        &nbsp;&nbsp;
        <span>Now</span>
      </div>
    </div>
  );
}

export default Login;