
export interface Props {
    stepNumber: string;

}


export default function GrayBoldStepNumber({ stepNumber } : Props) {


    return (
        <i style={{ color:  '#a7a6a6',fontSize: '1.5em',fontWeight: "bold",  }}>
            {stepNumber}
        </i>
    )
}