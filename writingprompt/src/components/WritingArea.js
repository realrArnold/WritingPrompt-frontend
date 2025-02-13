"use client";
import React, { useState } from "react";

const WritingArea = ({ client, writingPrompt }) => {
  const [data, setData] = useState({
    words: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      words: value, // Update the 'words' field when the textarea changes
    }));
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const submissionData = {
      ...data,
      writingPrompt, // From parent component
    };

    console.log("Form submitted with data:", submissionData);

    const response = await client.addWriting(submissionData);
    console.log(response);
    

    if (response.status === 201) {
      console.log("Writing added successfully");
      setSuccessMessage("Your writing has been successfully submitted!"); // Set success message
      setData({ words: "" }); // Optionally clear the form

      // Clear success message and show textarea after a delay
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // 5 seconds delay
    } else {
      console.log("Error adding writing");
      setSuccessMessage("An error occurred. Please try again."); // Set error message

      // Clear error message after a delay
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <div
      className="bg-white container mx-auto p-6 rounded-lg max-w-2xl"
      id="addUserWriting"
    >
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-gray-500 italic font-medium mb-1">
            {successMessage ? null : "Write here..."}
          </label>
          {successMessage ? (
            <div className="mt-4 text-green-500 text-center text-lg">
              {successMessage}
            </div>
          ) : (
            <>
              <textarea
                type="text"
                name="writingEntry"
                value={data.words}
                onChange={handleChange}
                className="w-full px-4 py-4 border shadow-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-left align-top resize"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default WritingArea;
