import { useState, useEffect } from "react";
import EntriesCard from "./EntriesCard";

const Page = ({ client, filters, genres }) => {
  const [allWritings, setAllWritings] = useState([]); // Full dataset (always remains untouched)
  const [Writings, setWritings] = useState([]); // Filtered dataset

  const fetchData = async () => {
    try {
      const data = await client.getWritings();
      setAllWritings(data.data); // Save original list
      setWritings(data.data); // Initially, show all
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(genres)
    if (genres && genres?.length !== 0) {
      const writings = [...allWritings].filter(item => {
          if (genres.includes(item.genre)) {
            return item
          }
      })
      console.log(writings)
      setWritings(
        writings
      )
    }
    if (genres?.length === 0) {
      setWritings(allWritings)
    }


    console.log(filters)

    if (filters?.includes("newest-to-oldest")) {
      // Start with all writings and filter by genre if needed
      let filteredWritings = genres?.length
        ? allWritings.filter(item => genres.includes(item.genre)) // First filter by genre
        : allWritings;
    
      // Then, sort by date
      const sortedUserWritings = filteredWritings
        .filter(item => item?.createdAt) // Ensure `createdAt` exists
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
      console.log(sortedUserWritings);
      setWritings(sortedUserWritings);
    } 
    
  }, [filters, genres])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Writings?.map((writing) => (
        <EntriesCard
          key={writing._id}
          title={writing.title}
          words={writing.words}
          writingPrompt={writing.prompt}
          genre={writing.genre}
          date={writing.date}
        />
      ))}
    </div>
  );
};

export default Page;
