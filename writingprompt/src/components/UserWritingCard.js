import React from "react";
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

export default function UserWritingCard({
  words,
  writingPrompt,
  genre,
  date,
  writingID,
  deleteWriting,
}) {
  return (
    <Card className="w-full flex flex-col h-full bg-gradient-to-bl from-violet-50 via-indigo-100 to-violet-200">
      <CardHeader>
        <CardTitle className="text-violet-500">{date}</CardTitle>
        <Label htmlFor="name">The prompt:</Label>
        <CardDescription className="italic">"{writingPrompt}"</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <form className="flex flex-col h-full" 
        // onSubmit={submitHandler}
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Your writing:</Label>
            <p className="text-gray-600">{words}</p>
          </div>
          <div id="inputs" className="flex flex-col space-y-3 pt-4 mt-auto">
            <div className="flex flex-col space-y-3 pt-4">
              <Label htmlFor="genre">Genre</Label>
              <Select className="">
                <SelectTrigger id="genre" className="bg-white">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="historical">Historical</SelectItem>
                  <SelectItem value="Autobiography">Autobiography</SelectItem>
                  <SelectItem value="non-fiction">Historical</SelectItem>
                  <SelectItem value="who-cares">None</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col w-full gap-1.5 pt-4">
                <Label htmlFor="title" className="text-left">
                  Would you like to add a title?
                </Label>
                <div className="flex items-center gap-1.5 w-full">
                  <Input
                    id="title"
                    type="text"
                    className="bg-white flex-grow"
                    // value={data.title}
                    // handle={onChange}
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
