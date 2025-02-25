import React from "react";
import NoviceAward from "./badges/NoviceAward";
import AuthorAward from "./badges/AuthorAward";
import MasterAward from "./badges/MasterAward";
import { ApiClient } from "../../apiclient/client";
import {useEffect, useState} from "react";



const AwardsWrapper = ({ setUserWritingsCount }) => {
    const client = new ApiClient();
    const [userWritings, setUserWritings] = useState([]);
    //define opacity variables of awards
    const [opacityNovice, setOpacityNovice] = useState("opacity-30");
    const [opacityAuthor, setOpacityAuthor] = useState("opacity-30");
    const [opacityMaster, setOpacityMaster] = useState("opacity-30");
    //API call to get User Writings
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

//useEffect hook to update the opacity of the awards based on the number of user writings    
useEffect(() => {    
//count number of user writings    
const userWritingsCount = userWritings.length;

//Pass the UserWritings count to the parent component
setUserWritingsCount(userWritingsCount);

//set opacity of awards based on number of user writings
if (userWritingsCount < 10) {
    setOpacityNovice("opacity-30")
} else if (userWritingsCount >= 10) {
    setOpacityNovice("opacity-100")
};


if (userWritingsCount < 30) {
    setOpacityAuthor("opacity-30");
  } else if (userWritingsCount >= 30) {
    setOpacityAuthor("opacity-100");
  }

  if (userWritingsCount < 100) {
    setOpacityMaster("opacity-30");
  } else if (userWritingsCount >= 100) {
    setOpacityMaster("opacity-100");
  }
}, [userWritings, setUserWritingsCount]); //dependancy array - tells React to run the effect function whenver the userWritings state changes.


  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-8 m-12">
      <NoviceAward
      opacity={opacityNovice}
      client={client} />

      <AuthorAward
      opacity={opacityAuthor}
      client={client} />

      <MasterAward
      opacity={opacityMaster}
      client={client} />
    </div>
  );
};

export default AwardsWrapper;
