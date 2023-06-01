import React, { useState } from "react";

const Signup = () => {
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, user_email, user_password }),
      });

      if (response.ok) {
        // Signup successful
        console.log("Signup successful");
      } else {
        // Signup failed
        console.log("Signup failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="m-5">
      <h1 className="m-5">Signup Form</h1>
      <form onSubmit={handleSubmit} className="m-5">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={user_name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user_email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={user_password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
