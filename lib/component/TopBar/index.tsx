'use client'

import { useEffect, useState } from "react";
import { TopBarStyles } from "./styles";
import { IconMenu, IconBrandGithub, IconSearch } from "@tabler/icons-react";
import SearchBar from "../SearchBar";

const TopBar: React.FC = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const classes = TopBarStyles();

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                setShowSearch(false);
            }
        };

        if (showSearch) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showSearch]);

    const handleSearchToggle = (): void => {
        setShowSearch(true);
    };

    const handleCloseSearch = (): void => {
        setShowSearch(false);
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
    };

    return(
        <>
            <div>
                <div className={classes.bar}>
                    <div className={classes.bartext}>
                        <div className={classes.MainSite}>
                            <IconSearch 
                                onClick={handleSearchToggle} 
                                style={{ cursor: 'pointer' }} 
                            />
                        </div>
                    </div>
                    <div className={classes.MainSite}>
                        <a href="/">MovPlayer</a>
                    </div>
                    <a 
                        href="https://github.com/Lisuuuuu/MovPlayer" 
                        className={classes.MainSite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <IconBrandGithub/>
                    </a>
                </div>
            </div>

            {/* Search Modal */}
            {showSearch && (
                <div 
                    className={classes.modalOverlay}
                    onClick={handleCloseSearch}
                >
                    <div 
                        className={classes.modalContent}
                        onClick={handleModalClick}
                    >
                        <SearchBar onClose={handleCloseSearch} />
                    </div>
                </div>
            )}
        </>
    );
};

export default TopBar;