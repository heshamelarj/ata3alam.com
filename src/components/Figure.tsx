
export interface Props {
    caption: string,
    pathToAssetImage: string,
    number: string,
}



export default function Figure({  pathToAssetImage, caption,number } : Props) {




        return (
            <div className={"figure-container"}>
                <img src={`/assets/images/${pathToAssetImage}`}
                     alt={`صورة: ${number}:  ${caption}`}/>
                <i className={"figure-caption"}>{`صورة ${number}:  ${caption}`}</i>
            </div>
        )


}

