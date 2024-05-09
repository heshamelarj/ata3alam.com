import type { CollectionEntry } from "astro:content";

export interface Props {
  href: string;
  linkTitle: string;
}


export default function InPostCustomLink({ href,linkTitle } : Props) {


  return (
    <>
      <a href={href} className="bg-orange-800 p-1" target="_blank">{linkTitle}</a>
    </>
  )
}