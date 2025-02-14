import { useState, useEffect } from "react";
import EntriesCard from "./EntriesCard";
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
    {Writings?.map((writing) => {
      return (
        <EntriesCard
          key={writing._id}
          title={writing.title}
          words={writing.words}
          writingPrompt={writing.prompt}
          genre={writing.genre}
          date={writing.date}
        />
      );
    })}
  </div>)
};

export default Page;
