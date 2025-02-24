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
import { Share2 } from "lucide-react"

export default function UserWritingCard({  words, writingPrompt, genre, date }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{date}</CardTitle>
        <Label htmlFor="name">The prompt:</Label>
        <CardDescription>"{writingPrompt}"</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your writing:</Label>
              <p className="text-gray-600">{words}</p>
            </div>
            <div className="flex flex-col space-y-3 pt-4">
              <Label htmlFor="genre">Genre</Label>
              <Select>
                <SelectTrigger id="genre">
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
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button ><Share2 /> Share</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}