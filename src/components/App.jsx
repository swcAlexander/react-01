// import PaintingList from './components/Painting/PaintingList';
// import paintings from './components/Painting/paintings.json';
// import Section from './components/Section/Section';
import React from 'react';
import tabs from './Tabs/Tabs.json';
import Tabs from './Tabs/Tabs.jsx';
// import Clock from './components/Clock/Clock';
import './App.css';
export default class App extends React.Component {
  state = {
    isOnline: true,
  };

  render() {
    return (
      <div>
        <Tabs items={tabs} />
        {/* {isOnline && 'Онлайн'} */}
        {/* { isOnline ? 'Онлайн' : 'Офлайн'} */}
        {/* 
      <Section title="Топ неділі">
        <PaintingList items={paintings} />
      </Section>
      <Clock /> */}
      </div>
    );
  }
}
