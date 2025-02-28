"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook
const { ApiClient } = require("../../apiclient/client");

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter(); // Initialize the router
  const client = new ApiClient()

  const submitHandler = async (e) => {
    
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await client.login(e.target.username.value, e.target.password.value);
        console.log(response)
      router.push("/promptspage")
      
    } catch (error) {
      console.error("Login failed:", error);
      setDisabled(false); // Enable the button again in case of error
    }
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-white">
  <form onSubmit={submitHandler} className="border-2 border-violet-400 p-6 rounded-lg shadow-lg w-96">
    <div className="mb-4">
      <label htmlFor="username" className="block text-[#283618] text-lg font-medium mb-2">
        Username
      </label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        placeholder="Enter your username"
        required 
        className="w-full px-4 py-2 border border-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 bg-white"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-[#283618] text-lg font-medium mb-2">
        Password
      </label>
      <input 
        id="password" 
        name="password" 
        type="password" 
        placeholder="Enter your password"
        required 
        className="w-full px-4 py-2 border border-violet-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 bg-white"
      />
    </div>
    <button 
      type="submit" 
      disabled={disabled} 
      className={`w-full py-2 rounded-md text-violet-600 font-semibold ${disabled ? 'bg-gray-300' : 'bg-indigo-100 hover:bg-indigo-200'}`}
    >
      {disabled ? "Signing in..." : "Sign in"}
    </button>
  
    <button
        onClick={() => router.push("/signup")}
        className="w-full mt-4 px-4 py-2 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        Create an account
      </button>
  </form>
</div>

  );
};

export default Login;