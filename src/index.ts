import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.status(501);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
