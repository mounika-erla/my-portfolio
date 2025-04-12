import React, { useState } from 'react';

export default function InteractiveCounter({ start = 0 }) {
  const [count, setCount] = useState(start);

  return (
    <div style={{ border: '1px solid blue', padding: '1em', marginTop: '1em' }}>
      <h4>React Counter Island</h4>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p><small>This component only becomes interactive on the client.</small></p>
    </div>
  );
}
