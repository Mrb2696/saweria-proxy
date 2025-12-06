import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // Allow ALL requests

const PORT = process.env.PORT || 3000;

// ====== STREAM KEY SAWERIA KAMU ======
const STREAM_KEY = "08268cac1393b4f1f4f322772be534ef";
// ======================================

const SAWERIA_URL =
  `https://saweria.co/widgets/leaderboard?streamKey=${STREAM_KEY}`;

// ======================================
// Endpoint yang akan dipanggil di Roblox
// ======================================
app.get("/leaderboard", async (req, res) => {
  try {
    const response = await fetch(SAWERIA_URL, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.get("/", (req, res) => {
  res.send("Saweria Proxy Running");
});

app.listen(PORT, () =>
  console.log(`Server berjalan di port ${PORT}`)
);
