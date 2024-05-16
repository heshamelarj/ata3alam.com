
export interface Props {
    src: string,
    alt: string,

}



export default function InlineImage({ src,alt } : Props) {


        return (
            <i>
                <img src={src} alt={alt} className={"inline-image"}/>
            </i>


        )


}

