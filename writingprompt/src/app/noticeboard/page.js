"use client"
import EntriesWrapper from "@/components/EntriesWrapper"
import Nav from "@/components/Nav";
import { ApiClient } from '../../../apiclient/client'
import Noticeboardfilter from "@/components/noticeboard-filter";
import { useState, useEffect} from "react";

const Noticeboard = () => {
  
    const client = new ApiClient(); // Initialize  client
    const [filters, setFilters] = useState([])
    const [genres, setGenres] = useState([])
    
    useEffect(() => {
      console.log(filters)
    }, [filters])
  
    return (
      <div>
        <Nav />
        <Noticeboardfilter 
          setFilters={setFilters}
          setGenres={setGenres}
          filters={filters}
          genres={genres}
        />
  <div>
          <EntriesWrapper
          client={client}
            filters={filters}
            genres={genres}
          />
  
        </div>
      </div>
    );
  };

  export default Noticeboard