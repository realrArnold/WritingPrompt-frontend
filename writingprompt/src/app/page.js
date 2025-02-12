// "use client";

// import HeroPrompt from "@/components/HeroPrompt";
// import WritingArea from "@/components/WritingArea.js";
// import { ApiClient } from "../../apiclient/client";
// import React, { useState } from 'react'

// export default function Home() {
//   const router = useRouter();
// }


//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     router.push("/");
//   };

//   const client = new ApiClient(() => token, logout);



//   if (token) {
//     return (
//       <div>
//         <HeroPrompt client={client} />
//         <WritingArea />
//       </div>
//     );
//   }


import axios from "axios";
import Signup from "@/components/Signup";

const Page = () => {
  return (
    <div>
     <Signup />
    </div>
  );
};

export default Page;