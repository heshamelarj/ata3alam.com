
export interface Props {
    stepNumber: string;
}


export default function GrayBoldStepNumberWithBorderAndPadding({ stepNumber } : Props) {


  return (
      <i style={{ color:  '#7f7d7d',fontSize: '1.5em',fontWeight: "bold", border: "2px solid #d4d4d4", padding: "0.05em" }}>
        {stepNumber}
      </i>
  )
}