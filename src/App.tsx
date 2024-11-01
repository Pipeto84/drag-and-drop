import { Title } from "./components/Title";
import { CardItem } from "./components/CardItem";
import { DragAndDrop } from "./components/DragAndDrop";

const App = () => {
  return (
    <div className="container-main flex">
      <Title />
      <DragAndDrop />
    </div>
  );
};

export default App;
