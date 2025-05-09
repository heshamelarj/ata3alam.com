import type { CollectionEntry } from "astro:content";

export interface Props {
  href: string;
  linkTitle: string;
}


export default function InPostCustomLink({ href,linkTitle } : Props) {


  return (
    <>
      <a href={href} className=" " target="_blank">{linkTitle}</a>
    </>
  )
}