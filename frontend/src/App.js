import React from 'react';

function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
