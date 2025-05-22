'use client';
import React, { useState, ChangeEvent } from "react";
import { IconSearch, IconX } from "@tabler/icons-react";
import { SearchBarStyles } from "./styles";

interface SearchBarProps {
    onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
    const classes = SearchBarStyles();
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const handleClose = (): void => {
        onClose();
    };

    return (
        <div className={classes.barstyle}>
            <div className={classes.bar}>
                <div className={classes.searchContainer}>
                    <div className={classes.searchInputContainer}>
                        <IconSearch size={20} className={classes.searchIcon} />
                        <input 
                            type="text" 
                            placeholder="Search for Movies/TV Series" 
                            value={query}
                            onChange={handleInputChange}
                            className={classes.searchInput}
                            autoFocus
                        />
                    </div>
                    <IconX 
                        size={20} 
                        onClick={handleClose}
                        className={classes.closeIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;