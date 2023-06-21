import PaintingList from "./components/PaintingList";
import paintings from "./components/paintings.json"
import Section from "./components/Painting/Section";
import { Counter } from "./components/Counter/Counter";

export default function App() {
  // const isOnline = true;
  return (
    
    <div>
      {/* {isOnline && 'Онлайн'} */}
      {/* { isOnline ? 'Онлайн' : 'Офлайн'} */}

      
      <Section title="Топ неділі">
        <PaintingList items={paintings} />
        <Counter initialValue = { 10 } />
      </Section>
      <Section/>  
    </div>
  );
}


