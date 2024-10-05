
export interface Props {
    stepNumber: string;

}


export default function GrayBoldStepNumber({ stepNumber } : Props) {


    return (
        <i style={{ padding: '2px',color:  '#7d7c7c',fontSize: '1.35em',fontWeight: "bold", border: "1px dashed #FF6B01" }}>
            {stepNumber}
        </i>
    )
}