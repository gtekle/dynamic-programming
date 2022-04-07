const rodCut = (prices, n) => {
  if(n === 0) return 0

  let maxValue = Number.MIN_SAFE_INTEGER

  for(let i=1; i<=n; i++){
    let cost = prices[i-1] + rodCut(prices, n-i)
    if(cost > maxValue) maxValue = cost
  }

  return maxValue;
}

const prices = [1, 5, 8, 9, 17, 17, 20];
let n = 4

console.log(rodCut(prices, n))