// How do you to find the prime factors of a number ?
// 2 => [2]
// 4 => [2,2]
// 12 => [2,2,3]

function primeFactors(n) {
  const factors = []
  let div = 2
  let num = n
  if (n < 4) {
    return [n]
  }
  while (num > 1) {
    if (num % div === 0) {
      num = num / div
      factors.push(div)
    } else {
      div++
    }
  }
  return factors
}

primeFactors(69) // = > [3,23]