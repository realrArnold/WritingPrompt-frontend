import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ApiClient } from "../../apiclient/client";

const WritingCarousel = ({setUserWriting}) => {
  const client = new ApiClient();
  const [userWritings, setUserWritings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserWritings = async () => {
    setLoading(true);

    try {
      const data = await client.getUserWritings();
      console.log("processing writings", data.data);
      const userWritings = data.data || "No writings available.";
      
      setUserWritings(userWritings); // Update this component's state
      setUserWriting(userWritings); // Update the parent component's state
    } catch (err) {
      console.error("Failed to fetch user writings:", err);
      setError("Unable to load user writings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserWritings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

return (
    <Carousel className="w-full max-w-5xl">
        <CarouselContent className="-ml-1">
            {userWritings.map((writing, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="bg-gradient-to-bl from-zinc-50 to-zinc-200">
                            <CardContent className="flex flex-col aspect-square items-start  p-6">
                            <p className="text-sm text-justify font-semibold text-gray-600 mb-2">
                                    {new Date(writing.createdAt).toLocaleDateString("en-GB")}
                                </p>
                                <p className="text-gray-800 text-sm text-justify indent-2>">
                                    {writing.words}
                                </p>
                                
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
);
}

export default WritingCarousel;
