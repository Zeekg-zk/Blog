/**
 * 这里动用了两次正则替换
 */
function trim1(str: string): string {
  return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}



function trim2(str: string): string {
  return str.substring(Math.max(str.search(/\S/), 0), str.search(/\S\s*$/) + 1);
}

console.log(trim2("   sdfsdf   "));
