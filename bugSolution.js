function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  console.log(a + b);
}

foo(1, 2); // 3
//foo(null, 2); // throws error
//foo(1, null); // throws error
//foo(null, null); // throws error