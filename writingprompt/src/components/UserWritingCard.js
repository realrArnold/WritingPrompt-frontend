import React, { useState, useEffect } from "react";
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



export default function UserWritingCard({ client, words, writingPrompt, genre, date, writingID, deleteWriting }) {
  const [data, setData] = useState({
    title: "",
    words,
    writingPrompt,
    genre,
    date,
    writingID,
  });

const [successMessage, setSuccessMessage] = useState("");

const handleTitleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
     [name]: value,
  }));
};

const handleGenreChange = (value) => {
  setData((prevData) => ({
    ...prevData,
    genre: value,
  }));
};

const submitHandler = async (e) => {
  e.preventDefault();

  const submissionData = {
    title: data.title,
    genre: data.genre,
  };

  try {
    const response = await client.updateWriting(data.writingID, submissionData);

    if (response.status === 201) {
      setSuccessMessage("Your writing has been successfully updated!");
      setData({ ...data, genre: "" , title: "" });
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
        <form className="flex flex-col h-full" 
        onSubmit={submitHandler}
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Your writing:</Label>
            <p className="text-gray-600">{words}</p>
          </div>
          <div id="inputs" className="flex flex-col space-y-3 pt-4 mt-auto">
            <div className="flex flex-col space-y-3 pt-4">
              <Label htmlFor="genre">Genre</Label>
              <Select value={data.genre} onChange={handleGenreChange}>
                <SelectTrigger id="genre" className="bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="Fantasy">Fantasy</SelectItem>
                  <SelectItem value="Romance">Romance</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Autobiography">Autobiography</SelectItem>
                  <SelectItem value="Non-fiction">Historical</SelectItem>
                  <SelectItem value="None">None</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col w-full gap-1.5 pt-4">
                <Label htmlFor="title" className="text-left">
                  Would you like to add a title?
                </Label>
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
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between place-items-end">
        <Button>
          <Share2 /> Share
        </Button>
        <Button variant="destructive" onClick={() => deleteWriting(writingID)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
