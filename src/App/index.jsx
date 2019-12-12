import React from 'react';
import Header from '../Header';
import Content from '../Content';
import CounterApp from '../CounterApp';
import Footer from '../Footer';

export default function App() {
  return (
    <div>
      {/* <Header />
      <Content /> */}
      <CounterApp initialCount={0} />
      {/* <Footer /> */}
    </div>
  );
}
