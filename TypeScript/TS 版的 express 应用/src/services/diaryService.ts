import diaries from "../../data/diaries";
import {
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
  DiaryEntry,
} from "../types";

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

/*
获取全部无敏感的数据
NonSensitiveDiaryEntry 是在 DiaryEntry 的基础上 Omit 了部分类型
 */
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

// 添加一个新的条目
/*
添加一个新的条目
NewDiaryEntry 是在 DiaryEntry 的基础上 Omit 了 id 类型
 */
const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

// 路由 api/diaries/:id来支持获取一个特定条目
const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
