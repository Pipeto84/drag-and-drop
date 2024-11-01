import { ContainerCards } from "../components/ContainerCards";
import { Status } from "../interfaces/index";

const typesHero: Status[] = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards status={container} key={container} />
      ))}
    </div>
  );
};
