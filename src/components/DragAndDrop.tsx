import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "../assets";
import { useDragAndDrop } from "../hooks/useDragAndDrop";

const typeHero: Status[] = ["good", "bad", "normal"];

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(data);

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
