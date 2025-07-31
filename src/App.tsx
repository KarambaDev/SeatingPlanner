import React, { useEffect, useState } from 'react';
import { Stage } from 'react-konva';

import { PersonProvider } from '/src/contexts/PersonContext';

import { Card } from './Card';
import { HallPlan } from './HallPlan';
import { Header } from './Header';
import { Search } from './Search';
import { StaticLayer } from './StaticLayer';
import type { Person } from './types';

var SCENE_BASE_WIDTH = 1125;
var MAX_WIDTH = 800;

function sizeComput() {
  const innerWidth = window.innerWidth;
  const width = innerWidth < MAX_WIDTH ? innerWidth : MAX_WIDTH;
  const height = width * 1.4;

  return {
    width,
    height,
  };
}

const App = () => {
  const [size, setSize] = useState(sizeComput());

  useEffect(() => {
    const checkSize = () => {
      setSize(sizeComput());
    };

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const scale = size.width / SCENE_BASE_WIDTH;

  return (
    <main>
      <PersonProvider>
        <Header />
        <Card />
        <Stage
          width={size.width}
          height={size.height}
          scaleX={scale}
          scaleY={scale}
          pixelRatio={1}
          className="stage"
        >
          <HallPlan />
          <StaticLayer />
        </Stage>
        <div className="cover" />
        <Search />
      </PersonProvider>
    </main>
  );
};

export default App;
