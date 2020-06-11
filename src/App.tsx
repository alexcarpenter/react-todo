import * as React from 'react';
import Button from './components/Button';
import Container from './components/Container';
// import { Battery } from 'react-feather';

function App() {
  return (
    <>
      <Container>
        <div className="flex items-center space-x-4 mb-4">
          <Button>Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="neutral">Neutral button</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button size="sm">Primary button</Button>
          <Button size="sm" variant="secondary">Secondary button</Button>
          <Button size="sm" variant="neutral">Neutral button</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Button disabled>Primary button</Button>
          <Button disabled variant="secondary">Secondary button</Button>
          <Button disabled variant="neutral">Neutral button</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
