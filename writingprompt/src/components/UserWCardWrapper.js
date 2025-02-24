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


  const deleteWriting = async (writingID) => {
    console.log("Writing ID to delete:", writingID);
   
    const response = await client.deleteWritingByID( writingID );
    console.log(response);
    if (response.status === 200) {
      // consider adding a user message (not console.log) - maybe toast?
      console.log("Writing deleted successfully");
      //reload data which changes state...which causes a re-render
      fetchData();
    } else {
      console.log("Error deleted event", response);
    }
  };

const sortedUserWritings = userWritings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

return (
  <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-4 px-4">
    {sortedUserWritings?.map((userWriting) => {
      return (
        <UserWritingCard
          key={userWriting._id}
          title={userWriting.title}
          words={userWriting.words}
          writingPrompt={userWriting.writingPrompt}
          genre={userWriting.genre}
          date={new Date(userWriting.createdAt).toLocaleDateString("en-GB")}
          writingID={userWriting._id}
          deleteWriting={deleteWriting}
        />
      );
    })}
  </div>
)
};

export default Page;
