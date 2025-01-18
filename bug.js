function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

foo(1, 2); // 3
foo(null, 2); //undefined
foo(1, null); //undefined
foo(null, null); //undefined