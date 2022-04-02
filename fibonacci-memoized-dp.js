const memo = {};

const fib = n => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n-1) + fib(n-2);

  return memo[n];
}

console.time('Execution Time');
console.log('fib(50): ', fib(50));
console.timeEnd('Execution Time');
