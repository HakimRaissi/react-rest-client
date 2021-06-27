/* Imports */

import { useEffect, useContext } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

import { ResponseContext } from "../../context";

/* Main Component */

const ResponseView = () => {
  const { response, loading } = useContext(ResponseContext);

  useEffect(() => {
    console.log("response effect");
  }, []);

  return (
    <div
      style={{ height: "400px" }}
      className="row d-flex justify-content-center align-items-center m-0 p-0 border border-dark"
    >
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : response && response.data ? (
        <AceEditor
          theme="xcode"
          mode="json"
          value={
            response && response.data
              ? JSON.stringify(response.data, null, 2)
              : ""
          }
          name="response-data"
          readOnly={true}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            useWorker: false,
            showGutter: false,
            printMargin: false,
            cursorStyle: "slim",
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      ) : (
        <p className="text-center">
          you'll see the reponse here when after you send your request
        </p>
      )}
    </div>
  );
};

/* Export */

export default ResponseView;
