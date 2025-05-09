import InPostCustomLink from "@components/InPostCustomLink.tsx";

export interface Props {
    width: string,
    pathToAssetVideo: string,
    number: string,
    caption: string
}



export default function Video({  pathToAssetVideo, caption,number, width } : Props) {




        return (
            <div className={"video-container"}>
                <video controls width={width}>
                    <source src={`/assets/videos/${pathToAssetVideo}`} type="video/mp4"/>
                </video>

                <i className={"video-caption"}>   فيديو {number}: {caption}  </i>

            </div>
        )


}

