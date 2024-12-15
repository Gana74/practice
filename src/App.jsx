import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ResultDisplay from "./components/ResultDisplay";
import LanguageSelect from "./components/LanguageSelect";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [result, setResult] = useState(null);

  // const handleRunCode = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/execute", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ language, code }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     }

  //     const data = await response.json();
  //     setResult(data);
  //   } catch (error) {
  //     console.error("Error executing code:", error);
  //     setResult({ status: "error", error: error.message });
  //   }
  // };
  const API_URL =
    process.env.REACT_APP_API_URL || "https://practice-ashen-one.vercel.app/";

  const handleRunCode = async () => {
    try {
      const response = await fetch(`${API_URL}/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language, code }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error executing code:", error);
      setResult({ status: "error", error: error.message });
    }
  };
  return (
    <div className="app">
      <h1>CodeE - Online Code Editor</h1>
      <p>Write and run your code online!</p>
      <LanguageSelect language={language} setLanguage={setLanguage} />
      <CodeEditor language={language} code={code} setCode={setCode} />
      <button onClick={handleRunCode}>Run</button>
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
