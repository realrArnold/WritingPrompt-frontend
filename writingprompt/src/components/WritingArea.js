"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

const WritingArea = ({ client, writingPrompt }) => {
  const [data, setData] = useState({
    words: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      words: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const submissionData = {
      ...data,
      writingPrompt,
    };

    try {
      const response = await client.addWriting(submissionData);

      if (response.status === 201) {
        setSuccessMessage("Your writing has been successfully submitted!");
        setData({ words: "" });
        setShowConfetti(true);

        setTimeout(() => {
          setSuccessMessage("");
          setShowConfetti(false);
        }, 5000);
      } else {
        setSuccessMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="bg-white container mx-auto p-6 rounded-lg max-w-2xl"
      id="addUserWriting"
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#FF5733", "#33FF57", "#3357FF", "#F7DC6F", "#D2B4DE", "#73C6B6"]} // Custom colors
        />
      )}
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
