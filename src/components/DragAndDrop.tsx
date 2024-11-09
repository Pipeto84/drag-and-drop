import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "../assets";
import { useState } from "react";

const typeHero: Status[] = ["good", "bad", "normal"];

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return (
    <div className="grid">
      {typeHero.map((container) => (
        <ContainerCards
          items={data}
          status={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
        />
      ))}
    </div>
  );
};
