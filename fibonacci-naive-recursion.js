const fib = n => {
  if (n <= 2) return 1

  return fib(n-1) + fib(n-2);
}

console.time('Execution Time');
console.log('fib(50): ', fib(50));
console.timeEnd('Execution Time');