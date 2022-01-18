import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get("/bmi", (req, res) => {
  const query = req.query;

  if (!query.weight || !query.height) {
    res.send({
      error: "malformatted parameters",
    });
  } else {
    res.send({
      weight: query.weight,
      height: query.height,
      bmi: calculateBmi(Number(query.weight), Number(query.height)),
    });
  }
});

app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});

// 访问这段 url 查看效果
// http://localhost:3001/bmi?height=1.74&weight=130
