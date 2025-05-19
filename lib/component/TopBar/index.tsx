'use client'

import { useState } from "react";
import { TopBarStyles } from "./styles";
import { IconMenu, IconBrandGithub } from "@tabler/icons-react";


export default function TopBar() {
    const[menuopen, setMenuOpen] = useState(false);
    const classes= TopBarStyles();
    return(
        <div>

        <div className={classes.bar}>
            <div className={classes.bartext}>

            <div onClick={() => {
                setMenuOpen(!menuopen);
            }} >
                <IconMenu stroke = {2}/>
            </div>
                <div className={classes.MainSite}>
            <a href ="/">MovPlayer</a>
                </div>
                <a href='https://github.com/Lisuuuuu/MovPlayer' className={classes.MainSite}>
                <IconBrandGithub/>
                </a>
            </div>
        </div>
        </div>
    )
}