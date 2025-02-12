import React, {useEffect,useState} from "react";
import EntriesCard from "./EntriesCard";
import axios from "axios";

const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

const DailyFilterForEntries = () => {
    const [writingPrompts, setWritingPrompts] = useState(null);
    const [entries, setEntries] = useState([]);