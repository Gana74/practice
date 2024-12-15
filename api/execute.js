export default async function handler(req, res) {
  if (req.method === "POST") {
    const { language, code } = req.body;

    if (!language || !code) {
      return res
        .status(400)
        .json({
          status: "error",
          error: "Language and code are required fields.",
        });
    }

    let output = "";
    let status = "success";

    try {
      if (language === "python") {
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
      } else {
        throw new Error("Unsupported language");
      }

      res.status(200).json({ status, output });
    } catch (error) {
      res.status(400).json({ status: "error", error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
