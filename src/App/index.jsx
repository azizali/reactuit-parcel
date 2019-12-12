import React from 'react';
import Header from '../Header';
import Content from '../Content';
import Counter from '../Counter';
import Footer from '../Footer';

export default function App() {
  return (
    <div>
      {/* <Header />
      <Content /> */}
      <Counter initialCount={0} />
      <Counter initialCount={5} />
      {/* <Footer /> */}
    </div>
  );
}
