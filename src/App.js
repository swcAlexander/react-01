import PaintingList from "./components/PaintingList";
import paintings from "./components/paintings.json"
import Section from "./components/Section";

export default function App() {
  // const isOnline = true;
  return (
    
    <div>
      {/* {isOnline && 'Онлайн'} */}
      {/* { isOnline ? 'Онлайн' : 'Офлайн'} */}

      
      <Section title="Топ неділі">
        <PaintingList items={paintings} />
      </Section>
      <Section/>  
    </div>
  );
}


