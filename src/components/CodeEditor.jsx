import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = ({ language, code, setCode }) => {
  return (
    <AceEditor
      mode={language === "python" ? "python" : "golang"}
      theme="monokai"
      value={code}
      onChange={setCode}
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
      width="100%"
      height="300px"
      fontSize={14}
      showPrintMargin={false}
    />
  );
};

export default CodeEditor;
