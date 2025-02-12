import axios from "axios";
import WritingsContainer from "@/components/WritingsContainer";
import WritingArea from "@/components/WritingArea";
import Hero115 from "@/components/Hero115";

const Page = () => {
  return (
    <div>
      <WritingsContainer />
      <Hero115 />
      <WritingArea />
    </div>
  );
};

export default Page;
