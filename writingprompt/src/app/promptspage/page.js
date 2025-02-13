
"use client"
import HeroPrompt from "@/components/HeroPrompt";
import WritingArea from "@/components/WritingArea.js";
import React, { useState } from "react";
import { ApiClient } from "../../apiclient/client";

const client = new ApiClient();

const Home = () => {
  const [writingPrompt, setWritingPrompt] = useState(""); // State to hold writingPrompt

  // const client = new ApiClient(); // Initialize your client

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


