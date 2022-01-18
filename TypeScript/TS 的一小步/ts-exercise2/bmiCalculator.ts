/*
编写一个函数calculateBmi，它根据给定的体重(以千克为单位)和身高(以米为单位)计算BMI ，然后返回一条适合结果的消息。
 */

export function calculateBmi(weight: number, height: number):number {
  const result = weight / (height * height);
  return result;
}