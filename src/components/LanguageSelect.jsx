import React from "react";

const LanguageSelect = ({ language, setLanguage }) => {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="language-select"
    >
      <option value="python">Python</option>
      <option value="golang">Go</option>
    </select>
  );
};

export default LanguageSelect;
