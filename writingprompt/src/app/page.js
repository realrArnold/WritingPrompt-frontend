
// "use client";
// import Login from "@/components/Login";
// import { ApiClient } from "../../apiclient/client";
// import Hero115 from "@/components/Hero115";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter for navigation
// import React from "react";
// import Signup from "@/components/Signup";
// import WritingArea from "@/components/WritingArea.js";

// export default function Home() {
//   const router = useRouter();
//   const [token, setToken] = useState(null);





//   const login = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//     //router.push("/dashboard"); // Redirect to dashboard after login
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     router.push("/"); // Redirect back to login page
//   };

//   const client = new ApiClient(() => token, logout);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     setToken(storedToken);
//   }, []);


//   // If there's a token, render the Dashboard directly
//   if (token) {
//     return (
//       <div>
//         {/* Render Dashboard or other protected content here */}
//         {/* <div>Welcome back! You are logged in.</div>
//         <button onClick={logout}>Logout</button> */}
//         <Hero115
//           client={client}
//         />
//         <WritingArea />
//       </div>
//     );
//   }

//   // Otherwise, show the login form
//   return (
//     <div>
//       <Login client={client} login={login} />
//     </div>
//   );
// }



"use client";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { ApiClient } from "../../apiclient/client";
import Hero115 from "@/components/Hero115";
import WritingArea from "@/components/WritingArea.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isSignup, setIsSignup] = useState(true); // Default to signup page

  // remove
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    router.push("/"); // Redirect to dashboard after login
  };

  const signup = async (userData) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setIsSignup(false); // Switch to login form
      router.push("/"); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/");
  };

  const client = new ApiClient(() => token, logout);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  if (token) {
    return (
      <div>
        <Hero115 client={client} />
        <WritingArea />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {isSignup ? (
          <Signup client={client} signup={signup} />
        ) : (
          <Login client={client} login={login} />
        )}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-200"
        >
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

