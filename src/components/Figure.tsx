
export interface Props {
    caption: string,
    pathToAssetImage: string,
    number: string,
    width: number,
    height: number,
}



export default function Figure({  pathToAssetImage, caption,number, width = 900, height = 630 } : Props) {

  const generateSrcSet = () => {
    const base = pathToAssetImage.replace(/\..+$/, '');
    return `
      /assets/images/resized/${base}@400w.webp 400w,
      /assets/images/resized/${base}@900w.webp 900w,
      /assets/images/resized/${base}@1200w.webp 1200w
    `;
  };


        return (
            <div className={"figure-container"}>
                <img src={`/assets/images/${pathToAssetImage}`}
                     alt={`صورة: ${number}:  ${caption}`}
                     widths={[400, 900, 1200]}
                     width={width}  // Actual image width
                     height={width}
                     sizes="(max-width: 768px) 100vw, 800px"
                     quality={80}
                     loading="lazy"
                     decoding="async"
                     srcSet={generateSrcSet()}
                />
                <i className={"figure-caption"}>{`صورة ${number}:  ${caption}`}</i>
            </div>
        )


}

