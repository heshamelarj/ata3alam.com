
export interface Props {
  stepNumber: Number;
}


export default function StepNumber({ stepNumber } : Props) {


  return (
      <i style={{ color: '#FF6B01',fontSize: '1.5em',fontWeight: 'bolder' }}>
        {stepNumber}
      </i>
  )
}