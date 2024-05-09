import type { CollectionEntry } from "astro:content";
import type {ReactNode} from "react";

export interface Props {
    children: Array<ReactNode>,
}



export default function NumberedList({ children } : Props) {


    return (
        <ul className="list-decimal list-inside">
            {{...children}}
        </ul>
    )
}