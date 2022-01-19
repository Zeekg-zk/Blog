import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
