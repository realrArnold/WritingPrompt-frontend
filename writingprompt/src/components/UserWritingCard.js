import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import DeleteAlert from "@/components/DeleteAlert";

export default function UserWritingCard({ client, words, writingPrompt, title, genre, date, writingID, deleteWriting }) {
  const [data, setData] = useState({
    title: title || " Untitled",
    words,
    writingPrompt,
    genre: genre || "No genre",
    date,
    writingID,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [successGenreMessage, setSuccessGenreMessage] = useState("");

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      title: value,
    }));
  };

  const handleGenreChange = (value) => {
    
    setData((prevData) => ({
      ...prevData,
      genre: value,
    }));
  };

  const submitTitleHandler = async (e) => {
    e.preventDefault();

    const submissionData = {
      title: data.title,
     
    };

    try {
      const response = await client.updateWriting(data.writingID, submissionData);
      console.log("Response:", response);


      if (response.status === 200) {
        setSuccessMessage("Title updated!");

        // Clear the title input field
        setData((prevData) => ({
          ...prevData,
          title: "",
        }));
       

          // Clear the success message after 30 seconds
            setTimeout(() => {
            setSuccessMessage("");
            }, 5000);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  const submitGenreHandler = async (e) => {
    e.preventDefault();

    const submissionData = {
      genre: data.genre,
    };

    try {
      const response = await client.updateWriting(data.writingID, submissionData);
      console.log("Response:", response);


      if (response.status === 200) {
        setSuccessGenreMessage("Genre updated!");

         // Clear the genre input field
         setData((prevData) => ({
          ...prevData,
          genre: "No genre",
        }));
       

          // Clear the success message after 30 seconds
          setTimeout(() => {
            setSuccessGenreMessage("");
          }, 5000);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  

  return (
    <Card className="w-full flex flex-col h-full bg-gradient-to-bl from-violet-50 via-indigo-100 to-violet-200">
      <CardHeader>
        <CardTitle className="text-violet-500">{date}</CardTitle>
        <Label htmlFor="name">The prompt:</Label>
        <CardDescription className="italic">"{writingPrompt}"</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <form className="flex flex-col h-full">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Your writing:</Label>
            <p className="text-violet-800 uppercase">{data.title}</p>
            <p className=" text-indigo-700 text-sm text-gray-600"> &#91;{data.genre}&#93;</p>
            <p className="text-gray-600">{words}</p>
          </div>
          <div id="inputs" className="flex flex-col space-y-3 pt-4 mt-auto">
            <div className="flex flex-col space-y-3 pt-4">
            {successGenreMessage ? (
                  <p className="text-green-500" >{successGenreMessage}</p>
                ) : (
          
                <Label htmlFor="genre" className="text-left">
                  Genre
                </Label>
                )}
              
              <div className="flex items-center gap-1.5 w-full">
              <Select value={data.genre} onValueChange={handleGenreChange}>
                <SelectTrigger id="genre" className="bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="Fantasy">Fantasy</SelectItem>
                  <SelectItem value="Romance">Romance</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Autobiography">Autobiography</SelectItem>
                  <SelectItem value="Non-fiction">Non-fiction</SelectItem>
                  <SelectItem value="Mystery">Mystery</SelectItem>
                  <SelectItem value="Horror">Horror</SelectItem>
                  <SelectItem value="No genre">No genre</SelectItem>
                </SelectContent>
              </Select>
              <Button
                    type="submit"
                    className="bg-inherit text-gray-00 border-violet-300 border-2 hover:bg-violet-200"
                    variant="outline"
                    onClick={submitGenreHandler}
                  >
                    Update
                  </Button>
                  </div>
              <div className="flex flex-col w-full gap-1.5 pt-4">
                {successMessage ? (
                  <p className="text-green-500" >{successMessage}</p>
                ) : (
          
                <Label htmlFor="title" className="text-left">
                  Would you like to add a title?
                </Label>
                )}
                <div className="flex items-center gap-1.5 w-full">
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    className="bg-white flex-grow"
                    value={data.title}
                    onChange={handleTitleChange}
                  />
                  <Button
                    type="submit"
                    className="bg-inherit text-gray-00 border-violet-300 border-2 hover:bg-violet-200"
                    variant="outline"
                    onClick={submitTitleHandler}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between place-items-end pt-4">
        <Button>
          <Share2 /> Share
        </Button>
        <DeleteAlert deleteWriting={deleteWriting} writingID={writingID} />
      </CardFooter>
    </Card>
  );
}

