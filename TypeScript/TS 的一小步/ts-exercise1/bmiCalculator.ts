/*
编写一个函数calculateBmi，它根据给定的体重(以千克为单位)和身高(以米为单位)计算BMI ，然后返回一条适合结果的消息。
 */

function calculateBmi(weight: number, height: number):number {
  const result = weight / (height * height);
  return result;
}

console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
// 使用下面这段命令查看效果
// npm run calculateBmi 130 1.74