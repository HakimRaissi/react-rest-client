/* Imports */

import { createContext, useState } from "react";

/* Context */

// Create context
const ResponseContext = createContext();

// Provider
function ResponseProvider({ children }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <ResponseContext.Provider
      value={{ response, setResponse, loading, setLoading }}
    >
      {children}
    </ResponseContext.Provider>
  );
}

/* Export */

export { ResponseProvider, ResponseContext };
