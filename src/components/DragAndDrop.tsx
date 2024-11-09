import { Status } from '../interfaces'
import { ContainerCards } from './ContainerCards'
import { data } from '../assets'

const typeHero: Status[] = ['good', 'bad', 'normal']

export const DragAndDrop = () => {
  return (
    <div className='grid'>
      {
        typeHero.map(container => (
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

