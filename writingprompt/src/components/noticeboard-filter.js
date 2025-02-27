"use client"

import React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { XIcon } from "lucide-react"

const Noticeboardfilter = ({ filters, setFilters, genres, setGenres }) => {
    const [isNewestToOldest, setIsNewestToOldest] = useState(false)

    const updateFilters = () => {
      console.log(filters)
        setIsNewestToOldest(!isNewestToOldest);
        if (!filters.includes("newest-to-oldest")) {
          setFilters(["newest-to-oldest"]);
        } else {
          setFilters([]);
        }
      };

      const updateGenres = (genre) => {
        setGenres((prev) => {
          const newGenres = new Set(prev); // Convert previous state to a Set
          if (newGenres.has(genre)) {
            newGenres.delete(genre); // Remove if already selected
          } else {
            newGenres.add(genre); // Add if not selected
          }
          return Array.from(newGenres); // Convert back to an array for state
        });
      };
      
      
      


  return (
    <div className="flex gap-12">
<Select 
      value={filters.includes("newest-to-oldest") ? "newest-to-oldest" : "oldest-to-newest"}
      onValueChange={() => {
        if (filters.includes("newest-to-oldest")) {
          setFilters([])
        } else {
          setFilters(["newest-to-oldest"])
        }
      }}
    >      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filters" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="newest-to-oldest">
            By Date: Newest to Oldest
          </SelectItem>
          <SelectItem value="oldest-to-newest">
            By Date: Oldest to Newest
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select onValueChange={updateGenres}  value="">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filters" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          <SelectItem value="Sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="Fantasy">Fantasy</SelectItem>
                  <SelectItem value="Romance">Romance</SelectItem>
                  <SelectItem value="Historical">Historical</SelectItem>
                  <SelectItem value="Autobiography">Autobiography</SelectItem>
                  <SelectItem value="Non-fiction">Non-fiction</SelectItem>
                  <SelectItem value="Mystery">Mystery</SelectItem>
                  <SelectItem value="Horror">Horror</SelectItem>
                  <SelectItem value="No genre">No genre</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
    {
  genres?.map((item) => {
    return (
      <div
        className="bg-red-500 w-32 p-2 rounded-md text-center flex text-white mt-8 space-x-12"
        key={item}
        onClick={() => {
          setGenres((prev) => prev.filter((genre) => genre !== item));
        }}
      >
        <span>{item}</span>
        <XIcon 
            className="w-6 h-6 text-white"
        />
      </div>
    );
  })
}

    </div>
  )
}

export default Noticeboardfilter;