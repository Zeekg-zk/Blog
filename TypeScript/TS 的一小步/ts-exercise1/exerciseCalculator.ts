/*
编写一个函数calculateExercises，计算每天运动的平均小时时间，并将其与每天运动小时的目标数量进行比较，然后返回一个包含如下值的对象:
- 天数
- 训练日数
- 原始目标值
- 计算出的平均时间
- 布尔值，描述是否达到目标
- 一个数字1-3之间的等级，区分满足小时数的程度（你可以自己决定度量标准）
- 解释评级的文字值
传入一个数组（数组元素表示一天锻炼情况）
 */

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function exerciseCalculator(arr: Array<number>, playDay: number): Result {
  let sum = 0,
    trainingDays = 0,
    rating = 3,
    ratingDescription = "";
  const periodLength = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) trainingDays++;
    sum += arr[i];
  }
  // 计算出 rating
  const tmp = sum / (playDay * periodLength);
  console.log(tmp);
  
  if (tmp > 0.8) {
    rating = 3;
  } else if (tmp > 0.4) {
    rating = 2;
  } else {
    rating = 1;
  }
  // 生成 ratingDescription
  if (rating === 3) {
    ratingDescription = "too good";
  } else if (rating === 2) {
    ratingDescription = "not too bad but could be better";
  } else {
    ratingDescription = "too bad";
  }
  return {
    periodLength,
    trainingDays,
    success: sum > (playDay * periodLength),
    rating,
    ratingDescription,
    target: playDay,
    average: sum/periodLength
  };
}

const planDay = Number(process.argv[2]);
const arr = process.argv.slice(3).map(item => Number(item))

console.log(exerciseCalculator(arr, planDay));
// 使用下面这段命令查看效果
// npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
