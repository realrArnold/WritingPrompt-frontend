
"use client"
import HeroPrompt from "@/components/HeroPrompt";
import WritingArea from "@/components/WritingArea.js";
import React, { useState } from "react";
import { ApiClient } from '../../../apiclient/client'


const Home = () => {
  const [writingPrompt, setWritingPrompt] = useState(""); // State to hold writingPrompt

  const client = new ApiClient(); // Initialize  client

  // // Initialize the ApiClient with token handling
  // const client = new ApiClient(
  //   () => localStorage.getItem("token"), // Token provider
  //   () => {
  //     console.log("User logged out");
  //     localStorage.removeItem("token"); // Clear token on logout
  //   }
  // );


  return (
    <div>
      {/* Pass setWritingPrompt to HeroPrompt */}
      <HeroPrompt setWritingPrompt={setWritingPrompt} />
      
      {/* Pass writingPrompt and username to WritingArea */}
      <WritingArea
        client={client}
        writingPrompt={writingPrompt}
      />
    </div>
  );
};

export default Home;
