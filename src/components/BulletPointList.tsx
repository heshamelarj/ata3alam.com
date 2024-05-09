import type { CollectionEntry } from "astro:content";
import type {ReactNode} from "react";

export interface Props {
    children: Array<ReactNode>,
}



export default function BulletPointList({ children } : Props) {


    return (
        <ol className="list-disc list-inside">
            {{...children}}
        </ol>
    )
}