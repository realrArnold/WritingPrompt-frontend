"use client";
import axios from "axios";
import WritingsContainer from "@/components/WritingsContainer";
import WritingArea from "@/components/WritingArea";
import HeroPrompt from "@/components/HeroPrompt";
import EntriesCard from "@/components/EntriesCard";
import { useState, useEffect } from "react";
const Page = ({ client }) => {
  const [Writings, setWritings] = useState([]);

  const fetchData = async () => {
    try {
      const data = await client.getWritings();
      console.log(data.data);
      setWritings(data.data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <WritingsContainer />  */}
      <HeroPrompt />
      <WritingArea />
      <div>
        {Writings?.map((writing) => (
          <EntriesCard
            key={writing.id}
            title={writing.title}
            words={writing.words}
            prompt={writing.prompt}
            genre={writing.genre}
            date={writing.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
