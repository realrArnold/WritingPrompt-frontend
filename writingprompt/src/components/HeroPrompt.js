"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ApiClient } from "../../apiclient/client";

const HeroPrompt = ({ setWritingPrompt}) => { // Destructure setWritingPrompt here
  const description = "Open up your mind. Visualize. Let it flow. Start typing...";
  const trustText = "Create a personal entry or share your writing with others.";
  const client = new ApiClient();
  //setWritingPrompts prop has been passed from Home() on page.js. 
  // This allows update of parent writingPrompt state using setWritingPrompt.
  const [writingPrompts, setWritingPrompts] = useState([]);
  const [error, setError] = useState(null);
  //do we want to display today's date?
  // const dateToday = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);


   //function to get data for changing prompt displayed by date(yesterday or today) or genre.
  // async function changeWritingPrompt(dateToday, dateYesterday, genre) {
  //   setDateYesterday(dateYesterday);
  //   setGenre(genre);
  //   settDateToday(dateToday);
  // }

  useEffect(() => {
    const fetchWritingPrompts = async () => {
      setLoading(true);
      
      try {
        const data = await client.getRandomWritingPrompt();
        console.log(data);
        const prompt = data.data.words || "No prompt available.";
        
        setWritingPrompts(prompt);
        setWritingPrompt(prompt); // Update the parent component's state
      } catch (err) {
        console.error("Failed to fetch writing prompts:", err);
        setError("Unable to load writing prompts.");
      } finally {
        setLoading(false);
      }
    };
    fetchWritingPrompts();
  }, [setWritingPrompt]); // Dependency ensures this effect runs when the callback is provided


  // useEffect(() => {
  //   const fetchWritingPrompts = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await client.getRandomWritingPrompt();
  //       console.log(data);
  //       setWritingPrompts(data.data.words || []); 
  //     } catch (err) {
  //       console.error("Failed to fetch writing prompts:", err);
  //       setError("Unable to load writing prompts.");
  //     } 
  //     finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchWritingPrompts();
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="overflow-hidden pt-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col items-center justify-center gap-5">
            <Image
              priority
              src="/images/quill.svg"
              height={48}
              width={48}
              alt="Quill pen drawing a line"
            />
            <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-medium md:text-6xl">
              {writingPrompts.length > 0 ? (
                <div>{`"${writingPrompts}"`}</div>
                )
               : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                "Loading prompts..."
              )}
            </h2>
            <p className="mx-auto text-blue-700 max-w-screen-md text-center md:text-xl">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pb-2 pt-3">
              {trustText && <div className="text-sm text-gray-500">{trustText}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPrompt;
