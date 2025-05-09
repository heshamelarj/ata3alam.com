
export interface Props {
    stepNumber: string;

}


export default function GrayBoldStepNumber({ stepNumber } : Props) {


    return (
        <i style={{ color:  '#7d7c7c',fontSize: '1.2em',fontWeight: "bold", border: "none" }}>
            {stepNumber}
        </i>
    )
}