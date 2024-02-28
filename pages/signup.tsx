// pages/signup.tsx

import { useRouter } from "next/router";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful signup, maybe log in the user or redirect to login page
      router.push("/login");
    } else {
      // Handle errors, show user feedback
      const errorData = await response.json();
      console.error("Signup failed:", errorData.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        placeholder="Password"
      />
      <input
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        required
        placeholder="First Name"
      />
      <input
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        required
        placeholder="Last Name"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupPage;
