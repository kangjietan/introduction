import express from "express";

import path from "path";

import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "../../client/public")));

app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
