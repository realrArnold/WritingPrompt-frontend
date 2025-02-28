"use client"

import React, { useState } from "react";
import Nav from "@/components/Nav";
import HeroPrompt from "@/components/HeroPrompt";
import WritingArea from "@/components/WritingArea.js"; 
import EntriesWrapper from "@/components/EntriesWrapper"
import { ApiClient } from '../../apiclient/client';


const Home = () => {
  const [writingPrompt, setWritingPrompt] = useState("");

  const client = new ApiClient(); 

  return (
    <div>
      <Nav />
      <HeroPrompt setWritingPrompt={setWritingPrompt} />
      <WritingArea client={client} writingPrompt={writingPrompt} />
      <div>
        <EntriesWrapper client={client} />
      </div>
    </div>
  );
};

export default Home;
