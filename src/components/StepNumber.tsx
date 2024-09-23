
export interface Props {
    stepNumber: string;
    color: string,
    fontWeight: string,
}


export default function StepNumber({ stepNumber, color, fontWeight } : Props) {


  return (
      <i style={{ color: color ? color : '#FF6B01',fontSize: '1.5em',fontWeight: fontWeight ? fontWeight : 'normal' }}>
        {stepNumber}
      </i>
  )
}