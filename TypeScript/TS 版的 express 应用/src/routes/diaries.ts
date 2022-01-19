import express from "express";
import diaryService from "../services/diaryService";
import toNewDiaryEntry from "../utils";

const router = express.Router();

// 获取全部无敏感的数据
router.get("/", (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

// 添加一个新的条目
/*
POST 这样的请求可以成功
{
    "date": "2020-1-4",
    "comment": "123123123123",
    "visibility": "great",
    "weather": "sunny"
}
 */
router.post("/", (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedEntry = diaryService.addDiary(newDiaryEntry);
    console.log("添加成功" + JSON.stringify(addedEntry, null, 2));
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

// 获取特定数据
router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

export default router;
