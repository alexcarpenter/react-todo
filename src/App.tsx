import * as React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import { Battery } from 'react-feather';

function App() {
  return (
    <>
      <Container>
        <div className="inline-flex space-x-4">
          <Button variant="neutral">Button text</Button>
          <Button variant="danger">Button text</Button>
          <Button>Button text</Button>
          <Button variant="secondary">
            <Battery width="1.2em" height="1.2em" />
            <span>Button text</span>
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;
