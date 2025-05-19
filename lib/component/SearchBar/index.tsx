'use client';
import { IconSearch } from "@tabler/icons-react";
import { SearchBarStyles } from "./styles";
import { useState } from "react";
import { sva } from "@/styled-system/css";

export default function SearchBar() {
    const classes = SearchBarStyles();
    const [query, setQuery] = useState("");
    return (
        <div className={classes.barstyle}>
        <div className={classes.bar}>
            <IconSearch/>
            <input type="text" placeholder="Search for Movies/TV Series" size={50} style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
        </div>
        </div>
    )
}