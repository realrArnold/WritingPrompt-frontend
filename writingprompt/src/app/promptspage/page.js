import axios from "axios";
import WritingsContainer from "@/components/WritingsContainer";
import WritingArea from "@/components/WritingArea";
import HeroPrompt from "@/components/HeroPrompt";
import Nav from "@/components/Nav";

const Page = () => {
  return (
    <div>
      {/* <WritingsContainer /> */}
      <Nav />
      <HeroPrompt />
      <WritingArea />
    </div>
  );
};

export default Page;
