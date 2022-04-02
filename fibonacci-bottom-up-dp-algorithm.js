const fib = n => {
  const fibos = {};

  for (let i=1; i<=n; i++){
    if(i <= 2) fibos[i] = 1;
    else fibos[i] = fibos[i-1] + fibos[i-2];
  }

  return fibos[n];
}

console.time('Execution Time');
console.log('fib(50): ', fib(50));
console.timeEnd('Execution Time');
