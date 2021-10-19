console.log("start 2021/10/19 12:50");

// 多个常用的js代码片段

// 1、简短的 if else 判断 (三元运算符)

// bad
if (10 < 100) {
  console.log("true");
} else {
  console.log("false");
}

// good
10 < 100 ? console.log("true") : console.log("false");

// 注意三元运算符嵌套不要超过三个

// 2、合并数组 (...扩展运算符又称展开符)
const two_numbers = [1, 2, 3];
let result = [];

// good
result = two_numbers.concat([4, 5, 6]);

// beautiful
result = [...two_numbers, 4, 5, 6];

// 3、数组中删除重复元素(去重)
const three_numbers = [1, 1, 2, 3, 9, 9];
const unique_three_numbers = [...new Set(three_numbers)];

// 4、交换两个变量而不用定义第三个变量
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("x:", x, "y:", y);

// 5、数字转字符串 + 字符串转数字

// 数字转字符串
const numTransformStr = 1 + "";

// 字符串转数字
const numStr = "1234";
const num = +numStr;

// 6、模板字符串
const name = "小王";
const desc = `My name is ${name}`;

// 7、字符串拆分成数组
const seven_str = "str";
const seven_as_atr = [...seven_str];

// 8、可选链接
// 说明：可选的链接运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。” — MDN Web文档
// 例如：你有一个data对象，并且想要安全地访问data.test.value。
// 首先，你需要检查：1、data 是否被定义; 2、data.test 是否被定义。

// good 一般处理
const data = { test: { value: 1 } };
if (data && data.test) {
  console.log(data.test.value);
}

// beautiful
console.log(data?.test?.value);
