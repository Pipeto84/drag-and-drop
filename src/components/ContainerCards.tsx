import { Status } from '../interfaces'
import { CardItem } from './CardItem'

interface Props {
  status: Status;
}

export const ContainerCards = ({status}: Props) => {
  return (
    <div className='layout-cards'>
      <p>{status} hero</p>
    </div>
  )
}
