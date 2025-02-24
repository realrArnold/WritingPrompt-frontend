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

export default function UserWritingCard({ words, writingPrompt, genre, date }) {
  return (
    <Card className="w-full flex flex-col h-full bg-gradient-to-bl from-zinc-50 to-zinc-200">
      <CardHeader>
        <CardTitle>{date}</CardTitle>
        <Label htmlFor="name">The prompt:</Label>
        <CardDescription className="italic">"{writingPrompt}"</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <form className="flex flex-col h-full">
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
                  <SelectItem value="who-cares">Whatever - I don't fit in a box!</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                <Label htmlFor="title">Would you like to add a title?</Label>
                <Input id="title" type="string" className="bg-white" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between place-items-end">
        <Button><Share2 /> Share</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}