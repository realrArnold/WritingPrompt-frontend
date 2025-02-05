"use client";
import React from "react";
import WritingArea from "@/components/WritingArea.js";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl">
        Writing Prompt App
      </h1>
      <WritingArea />
    </div>
  );
}
