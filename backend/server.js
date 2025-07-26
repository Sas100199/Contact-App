// backend/server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const queriesFile = path.join(__dirname, "queries.json");

// POST endpoint to receive form data
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const newQuery = { name, email, message, time: new Date().toISOString() };

  let queries = [];

  if (fs.existsSync(queriesFile)) {
    const data = fs.readFileSync(queriesFile);
    queries = JSON.parse(data);
  }

  queries.push(newQuery);
  fs.writeFileSync(queriesFile, JSON.stringify(queries, null, 2));

  res.json({ status: "success", message: "Query received!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.get("/api/queries", (req, res) => {
  if (!fs.existsSync(queriesFile)) {
    return res.json([]);
  }

  const data = fs.readFileSync(queriesFile, "utf-8");

  try {
    const queries = data.trim() ? JSON.parse(data) : [];
    res.json(queries);
  } catch (err) {
    console.error("Error parsing queries.json:", err);
    res.status(500).json({ error: "Failed to read queries." });
  }
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/admin.html"));
});
