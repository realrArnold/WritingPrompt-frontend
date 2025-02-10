"use client"
import React from 'react'
import { ApiClient } from '../../apiclient/client'
import { useState, useEffect } from 'react'
import axios from "axios"

const WritingsContainer = () => {

    const client = new ApiClient()
    const [writings, setWritings] = useState([])
    useEffect(() => {
        const fetchWritings = async () => {
            const data = await client.getWritings()
            setWritings(data.data)
            console.log(data)
        };
        fetchWritings();
    }, []);
    

  return (
    <div>
        {
            writings?.map(item => {
                return <div
                    key={item._id}
                >{item.title}</div>
            })
        }
    </div>
  )
}

export default WritingsContainer