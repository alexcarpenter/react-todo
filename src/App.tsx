import * as React from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className="">
        <Button onClick={e => alert(e.currentTarget)}>Button text</Button>
        <Input onChange={e => console.log(e.currentTarget.value)} />
      </div>
    </>
  );
}

export default App;
