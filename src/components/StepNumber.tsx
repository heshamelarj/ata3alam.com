
export interface Props {
    stepNumber: string;
    color: string,
    fontWeight: string,
    border: string,
}


export default function StepNumber({ stepNumber, color, fontWeight, border } : Props) {


  return (
      <i style={{ color: color ? color : '#FF6B01',fontSize: '1.5em',fontWeight: fontWeight ? fontWeight : 'normal', border: border ? border : "none", padding: "0.1em" }}>
        {stepNumber}
      </i>
  )
}