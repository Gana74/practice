import React from "react";

const ResultDisplay = ({ result }) => {
  if (!result) return null; // Если результат отсутствует, ничего не отображаем

  return (
    <div className="result">
      {result.status === "success" ? (
        <pre>{result.output}</pre> // Отображаем вывод, если статус успешный
      ) : (
        <pre className="error">{result.error}</pre> // Отображаем сообщение об ошибке, если статус ошибка
      )}
    </div>
  );
};

export default ResultDisplay;
