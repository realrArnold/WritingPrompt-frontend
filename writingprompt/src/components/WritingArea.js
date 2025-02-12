"use client"
import React, { useState, useEffect } from "react";
import { ApiClient } from "../../Apiclient/client";


const WritingArea = ({ client, username, writingPrompt }) => {
  const [data, setData] = useState({
    // title: "",
    words: "",
    // genre: ""
    date: newdate().toIsoString(),
    // writtenBy: ""
    // Reviews: ""
    // Upvotes: 0
  });

 // Handle input changes for multiple fields
 const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

//handle form submission
const submitHandler = async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Include username and writingPrompt in the submission
  const submissionData = {
    ...data,
    username, // From parent component
    writingPrompt, // From parent component
  };

  console.log("Form submitted with data:", submissionData);

  const response = await client.addWriting(submissionData);
  console.log(response);

  if (response.data.status === "200") {
    console.log("Writing added successfully");
  } else {
    console.log("Error adding writing");
  }
};

  return (
    <div
      className="bg-white container mx-auto p-6 rounded-lg max-w-2xl "
      id="addUserWriting"
    >
    
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-gray-500 italic font-medium mb-1">
            Write here...
          </label>
          <textarea
            type="text"
            name="writingEntry"
            value={data.words} 
            
            onChange={handleChange}
            className="w-full px-4 py-4 border shadow-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-left align-top rezise"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritingArea;
