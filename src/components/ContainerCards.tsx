import { Status, Data } from '../interfaces'
import { CardItem } from './CardItem'

interface Props {
  status: Status;
  items: Data[];
}

export const ContainerCards = ({status, items = []}: Props) => {
  return (
    <div className='layout-cards'>
      <p>{status} hero</p>
      {

        items.map(item => (
          status === item.status &&
          <CardItem
            data={item}
            key={item.id}
          />
        ))
      }
    </div>
  )
}
