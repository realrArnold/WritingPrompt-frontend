// create new user
// sign up button


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError(null);

    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log(username)
    console.log(password)

    try {
      const response = await fetch("http://localhost:3001/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      router.push("/login"); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      setError(error.message || "Signup failed. Please try again.");
      setDisabled(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form onSubmit={submitHandler} className="border-2 border-green-700 p-6 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-2">Choose a Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium mb-2">Choose a Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={disabled}
          className={`w-full py-2 rounded-md text-white font-semibold ${disabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
        >
          {disabled ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

  