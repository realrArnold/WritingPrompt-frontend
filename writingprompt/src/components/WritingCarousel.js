
import React, { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ApiClient } from "../../apiclient/client";


const WritingCarousel = () => { // Destructure setWritingPrompt here
  const client = new ApiClient();
  //setWritingPrompts prop has been passed from Home() on page.js. 
  // This allows update of parent writingPrompt state using setWritingPrompt.
  const [userWritings, setUserWritings] = useState([]);
  const [error, setError] = useState(null);
  //do we want to display today's date?
  // const dateToday = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchUserWritings = async () => {
      setLoading(true);
      
      try {
        const data = await client.getUserWritings();
        console.log(data);
        const userWritings = data.data.words || "No writings available.";
    
        setUserWritings(userWritings); // Update the parent component's state
      } catch (err) {
        console.error("Failed to fetch user writings:", err);
        setError("Unable to load user writings.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserWritings();
  }, [client, setUserWritings]); // Dependency ensures this effect runs when the callback is provided


  if (loading) {
    return <div>Loading...</div>;
  }

return (
    <div className="w-full px-2">
        <Carousel className="w-full max-w-4xl mx-auto">
                {userWritings.map((writing, index) => {
                    const date = new Date(writing.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    });
                    return (
                        <CarouselItem key={index} className="pl-1 md:basis-1/4 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent
                                        className="flex aspect-square items-center justify-center p-6"
                                        key={writing._id}
                                        date={writing.createdAt}
                                        words={writing.words}
                                    >
                                        <span className="text-2xl font-semibold">{date}</span>
                                        <p className="text-gray-600 text-sm">{writing.words}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            <CarouselNext />
        </Carousel>
    </div>
);
}

export default WritingCarousel;