require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5050;
app.use(cors());
app.use(express.json());
const boxes = [];
const multipliers = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};
app.post("/api/boxes", (req, res) => {
  const { receiverName, weight, colorRgb, destination } = req.body;
  if (!receiverName || weight === undefined || !colorRgb || !destination)
    return res.status(400).json({ error: "All fields required" });
  const w = Number(weight);
  if (Number.isNaN(w))
    return res.status(400).json({ error: "Weight must be number" });
  const final = w < 0 ? 0 : w;
  const id = Date.now().toString(36);
  const box = {
    id,
    receiverName,
    weight: final,
    colorRgb,
    destination,
    createdAt: new Date().toISOString(),
  };
  boxes.push(box);
  res.status(201).json(box);
});
app.get("/api/boxes", (req, res) =>
  res.json(
    boxes.map((b) => ({
      ...b,
      calculatedCost: Number(b.weight) * (multipliers[b.destination] || 0),
    }))
  )
);
app.listen(PORT, () => console.log("listening", PORT));
