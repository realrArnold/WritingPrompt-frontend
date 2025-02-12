import axios from "axios";
import WritingsContainer from "@/components/WritingsContainer";
import WritingArea from "@/components/WritingArea";
import HeroPrompt from "@/components/HeroPrompt";

const Page = () => {
  return (
    <div>
      {/* <WritingsContainer /> */}
      <HeroPrompt />
      <WritingArea />
    </div>
  );
};

export default Page;
