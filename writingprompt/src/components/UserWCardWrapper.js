import { useState, useEffect } from "react";
import UserWritingCard from "./UserWritingCard";
const Page = ({ client }) => {
  const [userWritings, setUserWritings] = useState([]);

  const fetchData = async () => {
    try {
      const data = await client.getUserWritings();
      console.log(data.data);
      setUserWritings(data.data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
return (
  <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-4 px-4">
    {userWritings?.map((userWriting) => {
      return (
        <UserWritingCard
          key={userWriting._id}
          title={userWriting.title}
          words={userWriting.words}
          writingPrompt={userWriting.writingPrompt}
          genre={userWriting.genre}
          date={userWriting.date}
        />
      );
    })}
  </div>)
};

export default Page;
