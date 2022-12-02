import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

  
  // ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

