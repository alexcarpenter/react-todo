import * as React from 'react';
import { Box } from './components/Box';

function App() {
  return (
    <>
      <Box as="article" display="flex" sx={4}>
        <div>Children</div>
        <div>Children</div>
      </Box>
    </>
  );
}

export default App;
