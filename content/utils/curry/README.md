## 👉 curry

在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。这个技术由克里斯托弗·斯特雷奇以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和戈特洛布·弗雷格发明的。

`柯里化是将一个接受多个参数的函数分解成一系列函数，每个函数只接受一个参数。` 例如：将 `f(a,b,c)` 变换为 `f(a)(b)(c)` 。

### ✍️ 实现

```js
function curry(func) {
  return function curried(...args) {
    // 如果参数的数量（args.length）大于或等于原函数中定义的参数数量（func.length），
    // 则直接使用 func.apply 将参数传递。
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    // 否则，我们只得到一部分参数，此时还未调用 func，
    // 则返回一个新的匿名函数，重新柯里化，提供之前的参数（args）和当前匿名函数参数（args2）。
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
```

### 📌 测试

```js
function sum(a, b, c) {
  return a + b + c;
}

const currySum = curry(sum);

currySum(1, 2, 3); // 6 - 未柯里
currySum(1)(2)(3); // 6 - 完全柯里
currySum(1)(2, 3); // 6 - 第一个参数柯里
```

---

#### 🔗 参考链接

- [[wiki] 柯里化](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)
- [What is 'Currying'?](https://stackoverflow.com/questions/36314/what-is-currying)
- [[javascript.info] currying](https://javascript.info/currying-partials)
