import express from "express";
import { json } from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Разрешаем CORS для всех запросов
app.use(json()); // Парсим JSON-тело запроса

// Маршрут для выполнения кода
app.post("/execute", (req, res) => {
  const { language, code } = req.body;

  // Проверяем, что язык и код переданы
  if (!language || !code) {
    return res.status(400).json({
      status: "error",
      error: "Language and code are required fields.",
    });
  }

  // Имитация выполнения кода
  try {
    let output = "";
    let status = "success";

    if (language === "python") {
      // Проверка на наличие функции print
      if (code.includes("print")) {
        output = "Hello, Python world!\n";
      } else {
        throw new Error("SyntaxError: Missing print statement");
      }
    } else if (language === "javascript") {
      if (code.includes("console.log")) {
        output = "Hello, JavaScript world!\n";
      } else {
        throw new Error("SyntaxError: Missing console.log statement");
      }
    } else if (language === "go") {
      // Поддержка для Go
      if (code.includes("fmt.Println")) {
        output = "Hello, Go world!\n";
      } else {
        throw new Error("SyntaxError: Missing fmt.Println statement");
      }
    } else {
      throw new Error("Unsupported language");
    }

    // Возвращаем успешный ответ
    res.json({
      status,
      output,
    });
  } catch (error) {
    // Возвращаем ошибку
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
});
