import HeroPrompt from "@/components/HeroPrompt";
import WritingArea from "@/components/WritingArea.js";
import React, { useState } from "react";

const Home = () => {
  const [username] = useState(""); // state to hold username
  const [writingPrompt, setWritingPrompt] = useState(""); // State to hold writingPrompt

  const client = new ApiClient(); // Initialize your client

  return (
    <div>
      {/* Pass setWritingPrompt to HeroPrompt */}
      <HeroPrompt setWritingPrompt={setWritingPrompt} />
      
      {/* Pass writingPrompt and username to WritingArea */}
      <WritingArea
        client={client}
        username={username}
        writingPrompt={writingPrompt}
      />
    </div>
  );
};

export default Home;
