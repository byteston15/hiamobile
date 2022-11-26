import React from 'react';
import RootNavigation from './routes/RootNavigation';
import DrawerNavigation from './routes/DrawerNavigation';

const App = () => {
  return (
    <RootNavigation>
      <DrawerNavigation/>
    </RootNavigation>
  )
}

export default App