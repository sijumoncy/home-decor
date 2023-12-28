"use client";

import ErrorField from "@/components/utils/ErrorField";
import LoaderLine from "@/components/utils/Loader/LoaderLine";
import { validateWithRegex } from "@/utils/validation";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [formDataError, setFormDataError] = useState({
    username: { error: false, message: "", explanation: "" },
    name: { error: false, message: "", explanation: "" },
    email: { error: false, message: "", explanation: "" },
    password: { error: false, message: "", explanation: "" },
  });

  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as {
      name: "name" | "email" | "password" | "username";
      value: string;
    };

    const validate: { error: boolean; message: string; explanation: string } =
      await validateWithRegex(name, value);

    if (value) {
      setFormDataError((prevData) => ({
        ...prevData,
        [name]: validate,
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(formDataError).every((field) => !field.error)) {
      setLoading(true);
      console.log("form event target : ", formData);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      console.log("validation failed");
    }
  };

  return (
    <div className="signup__container">
      <h4>Sign Up</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="username"
          name="username"
          id="username"
          type="text"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <ErrorField
          errorText={formDataError.username.message}
          explanation={formDataError.username.explanation}
        />

        <input
          className="name"
          name="name"
          id="name"
          type="text"
          placeholder="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <ErrorField
          errorText={formDataError.name.message}
          explanation={formDataError.name.explanation}
        />

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

        <ErrorField
          errorText={formDataError.email.message}
          explanation={formDataError.email.explanation}
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

        <ErrorField
          errorText={formDataError.password.message}
          explanation={formDataError.password.explanation}
        />

        {loading ? (
          <LoaderLine />
        ) : (
          <button className="sign-btn">Sign Up</button>
        )}
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
