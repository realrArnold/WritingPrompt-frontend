
"use client"
import HeroPrompt from "@/components/HeroPrompt";
import EntriesWrapper from "@/components/EntriesWrapper"
import Nav from "@/components/Nav";
import WritingArea from "@/components/WritingArea.js";
import React, { useState } from "react";
import { ApiClient } from '../../../apiclient/client'


const Home = () => {
  const [writingPrompt, setWritingPrompt] = useState(""); // State to hold writingPrompt

  const client = new ApiClient(); // Initialize  client

  return (
    <div>
      <Nav />

      {/* Pass setWritingPrompt to HeroPrompt */}
      <HeroPrompt setWritingPrompt={setWritingPrompt} />
      
      {/* Pass writingPrompt and username to WritingArea */}
      <WritingArea
        client={client}
        writingPrompt={writingPrompt}
      />
<div>
        <EntriesWrapper
        client={client}/>

      </div>
    </div>
  );
};

export default Home;