import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

// Route to serve the HTML page and set cookies
app.get("/", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple HTML Page</title>
      </head>
      <body>
        <h1>Welcome to the Simple HTML Page</h1>
        <p>Current Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `;

  // Set five cookies with different names and values
  res.setHeader("Set-Cookie", [
    "cookie1=value1; Path=/; HttpOnly",
    "cookie2=value2; Path=/; Secure",
    "cookie3=value3; Path=/; SameSite=Strict",
    "cookie4=value4; Path=/; Max-Age=3600",
    "cookie5=value5; Path=/; Domain=localhost",
    "cookie1=value1;  HttpOnly",
    "cookie1=value1; Path=/; ",
  ]);
  res.set("Cache-Control", "public, max-age=3600");
  // Send the HTML content as the response
  res.status(200).send(htmlContent);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
