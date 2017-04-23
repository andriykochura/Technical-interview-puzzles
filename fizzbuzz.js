// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number 
// and for the multiples of five print “Buzz”. For numbers which 
// are multiples of both three and five print “FizzBuzz”

const fizzbuzz = limit => {
  const list  = Array.from(limit, (x,i) => i+1)
  const subs = x => {
    let result = (x % 3 ? '' : 'Fizz') + (x % 5 ? '' : 'Buzz')    
    return result || x
  }
  return list.map(subs)
}

fizzbuzz({length: 35}).forEach(x => console.log(x))

// Also check this out if you are curious
// https://gist.github.com/jaysonrowe/1592432