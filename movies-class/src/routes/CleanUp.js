import { useState, useEffect } from 'react';

function Hello() {
  function byeFn() {
    console.log('destroyed :(');
  }
  function hiFn() {
    console.log('created :)');
    return byeFn;
  }

  useEffect(hiFn, []);
  return (<h1>Hello</h1>);
}

export default function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}
