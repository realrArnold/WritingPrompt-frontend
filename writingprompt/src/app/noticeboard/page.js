"use client"
import EntriesWrapper from "@/components/EntriesWrapper"
import Nav from "@/components/Nav";
import { ApiClient } from '../../../apiclient/client'

const Noticeboard = () => {
  
    const client = new ApiClient(); // Initialize  client
  
    return (
      <div>
        <Nav />
  <div>
          <EntriesWrapper
          client={client}/>
  
        </div>
      </div>
    );
  };

  export default Noticeboard