import { Data, Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from '../assets'
import { useState } from "react";

const typeHero: Status[] = ["good", "bad", "normal"];

export const DragAndDrop = () => {

  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(data)

  const handleDragging = (dragging: boolean) => setIsDragging(dragging)

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find(item => item.id === id)

    if(card && card.status !== status) {
      card.status = status
      setListItems(prev => ([
        card!,
        ...prev.filter(item => item.id !== id)
      ]))
    }
  }

  return (
    <div className="grid">
      {
        typeHero.map((container) => (
          <ContainerCards 
            items={listItems} 
            status={container} 
            key={container} 

            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))
      }
    </div>
  );
};
