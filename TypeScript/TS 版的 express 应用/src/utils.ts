/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NewDiaryEntry, Weather, Visibility } from "./types";

// Comment 验证
const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment: " + comment);
  }

  return comment;
};
const isString = (text: unknown): text is string => {
  return typeof text === "string";
};

// Date 验证
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

// Weather 验证
const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather: " + weather);
  }
  return weather;
};
const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

// Visibility 验证
const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};
const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
      throw new Error('Incorrect or missing visibility: ' + visibility);
  } 
  return visibility;
};

/*
在input 验证这种场景来说 unknown 是一个理想类型，
因为我们还不需要定义任何类型来匹配 any 类型，
但可以先验证类型并确认期望的类型。
利用 unknown ，我们也不用担心 @typescript-eslint/no-explicit-any eslint规则
 */
type Fields = {
  comment: unknown;
  date: unknown;
  weather: unknown;
  visibility: unknown;
};

const toNewDiaryEntry = ({
  comment,
  date,
  weather,
  visibility,
}: Fields): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(comment),
    date: parseDate(date),
    weather: parseWeather(weather),
    visibility: parseVisibility(visibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;
