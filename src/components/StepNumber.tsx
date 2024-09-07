
export interface Props {
  stepNumber: string;
}


export default function StepNumber({ stepNumber } : Props) {


  return (
      <i style={{ color: '#FF6B01',fontSize: '1.5em',fontWeight: 'normal' }}>
        {stepNumber}
      </i>
  )
}