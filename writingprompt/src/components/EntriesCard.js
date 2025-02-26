//This is the order components will come in, reviews will likely have to be done somewhere else.
//Perhaps we can dynamcially have a new page each time new writings are submitted and put the reviews on there

import { useState, useEffect } from "react";
import React from 'react'

export default function EntriesCard({ title, words, writingPrompt, genre, date, user }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="bg-gray-100 hover:bg-gray-200 shadow-lg rounded-2xl text-center p-6 flex flex-col gap-4 cursor-pointer" onClick={toggleTextDisplay}>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-800 underline">
          {writingPrompt}
        </h3>
        <h4 className="text-l font-semibold text-gray-800 underline">
          {title || ""}
        </h4>
        <p className="text-gray-600 font-medium">{genre || ""}</p>
        <p className="text-black">
          
        {showFullText ? words : (
            <>
              {words.substring(0, 150)}"...""
              <span className="text-blue-500"> <br></br> read more</span>
            </>
          )}
        </p>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">
          <span className="font-medium">by</span> {user}
        </p>
      </div>
    </div>
  );
}
