import { Status, Data } from '../interfaces'
import { CardItem } from './CardItem'

interface Props {
  status: Status;
  items: Data[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
}

export const ContainerCards = ({status, items = [], isDragging, handleDragging}: Props) => {
  return (
    <div className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}>
      <p>{status} hero</p>
      {

        items.map(item => (
          status === item.status &&
          <CardItem
            data={item}
            key={item.id}
            handleDragging={handleDragging}
          />
        ))
      }
    </div>
  )
}
