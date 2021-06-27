/* Imports */

import { useState, useContext } from "react";

import axios from "axios";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

import { ResponseContext } from "../../context";

/* Main Component */

const RequestForm = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const { setResponse, setLoading } = useContext(ResponseContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    let axiosResponse;

    switch (method) {
      case "GET":
        axiosResponse = await axios.get(url);
        setResponse(axiosResponse);
        setLoading(false);
        break;

      case "POST":
        axiosResponse = await axios.post(url, JSON.parse(body));
        setResponse(axiosResponse);
        setLoading(false);
        break;

      case "DELETE":
        axiosResponse = await axios.delete(url);
        setResponse(axiosResponse);
        setLoading(false);
        break;

      case "PUT":
        axiosResponse = await axios.put(url, JSON.parse(body));
        setResponse(axiosResponse);
        setLoading(false);
        break;

      case "PATCH":
        axiosResponse = await axios.patch(url, JSON.parse(body));
        setResponse(axiosResponse);
        setLoading(false);
        break;

      default:
        setLoading(false);
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row m-0 p-0">
        <div className="row m-0 p-0 mb-4 d-flex justify-content-between">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="col-1"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="DELETE">DELETE</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
          </select>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="col-9"
          />

          <button type="submit" className="col-1 btn btn-primary">
            send
          </button>
        </div>

        <div
          style={{ height: "400px" }}
          className="row m-0 p-0 mb-4 border border-dark"
        >
          <AceEditor
            theme="xcode"
            mode="json"
            name="body"
            value={body}
            onChange={(currentCode) => setBody(currentCode)}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              useWorker: false,
              showGutter: true,
              printMargin: false,
            }}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </form>
    </div>
  );
};

/* Export */

export default RequestForm;
