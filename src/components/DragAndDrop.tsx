import { Status } from '../interfaces';
import { ContainerCards } from './ContainerCards';
import { data } from '../assets'

const typesHero: Status[] = ['good', 'bad', 'normal']

export const DragAndDrop = () => {
  return (
    <div className='grid'>
      {
        typesHero.map(container => (
          <ContainerCards
            status={container}
            key={container}
            items={data}
          />
        ))
      }
    </div>
  )
}
