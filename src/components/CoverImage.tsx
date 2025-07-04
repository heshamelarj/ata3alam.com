import type { CollectionEntry } from "astro:content";

import { useEffect, useRef, useState, useMemo } from "react";

export interface Props {
    lightThemeSrc: string,
    darkThemeSrc: string,
    alt: string,

    photoUrl: string,
    photoArtistName: string,
}



export default function CoverImage({ lightThemeSrc, darkThemeSrc,alt, photoArtistName, photoUrl } : Props) {

    const [lStorageTheme, setLStorageTheme] = useState("")
    const [isDark, setIsDark] = useState(true);


    useEffect(() => {

        let theme =localStorage.getItem('theme');
        if (theme)
        setLStorageTheme(theme);
        setIsDark(setIsDarkFromLocalStorage(lStorageTheme));



    }, [lStorageTheme,isDark]);


    if (isDark)
    {
        return (
            <>
                <img src={darkThemeSrc} alt={alt}   loading="eager" width="900" height="630" />
                <small className={"artist-name"}>
                    <a href={photoUrl}>الصورة من طرف <strong>{photoArtistName}</strong> </a>
                </small>
            </>
        )
    } else {
        return (
            <>
                <img src={lightThemeSrc} alt={alt}   loading="eager" width="900" height="630" />
                <small className={"artist-name"}>
                    <a href={photoUrl}>الصورة من طرف <strong>{photoArtistName}</strong> </a>
                </small>
            </>

        )
    }

}

function setIsDarkFromLocalStorage(whichTheme = "dark") {
    return whichTheme === "dark";
}