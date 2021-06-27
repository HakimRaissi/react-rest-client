/* Imports */

import RequestForm from "./components/RequestForm";
import ResponseView from "./components/ResponseView";

/* Main Component */

const App = () => {
  return (
    <div className="container p-4  vh-100">
      <RequestForm />
      <ResponseView />
    </div>
  );
};

/* Export */

export default App;
