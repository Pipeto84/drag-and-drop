import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { data } from "../assets/index";

const typesHero: Status[] = ["good", "bad", "normal"];

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
