
export interface Props {
    stepNumber: string;

}


export default function GrayBoldStepNumber({ stepNumber } : Props) {


    return (
        <i style={{ color:  '#7d7c7c',fontSize: '1.5em',fontWeight: "bold", border: "1px dashed #a7a6a6" }}>
            {stepNumber}
        </i>
    )
}