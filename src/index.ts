import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.set("Cache-Control", "max-age=60");
  const currentTime = new Date().toLocaleString();
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express HTML Response</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>This is a simple HTML response from an Express app.</p>
         <p>Current Server Time: ${currentTime}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
