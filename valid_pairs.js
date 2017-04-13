// Given a string of brackets, return if string is 
// valid or not. String is valid if all opening brackets 
// have matching closing brackets.

// {[()]} = valid
// {()[]} = valid
// {[} = invalid 

const sampleString1 = '{[()]}'
const sampleString2 = '{[}'
const sampleString3 = '}}[]'

function validPairs(bString) {
  const brackets = bString.split('')
  const total = brackets.length
  const stack = []
  const pairs = {
    '{':'}',
    '[':']',
    '(':')'
  }

  for(let i = 0; i < total; i++) {
    let isLeftBracket = pairs[brackets[i]]
    let isClosingBracket = pairs[stack[stack.length-1]] === brackets[i]
    if (isLeftBracket) {
      stack.push(brackets[i])
    } else 
    if (isClosingBracket) {
      stack.pop()
    } 
    else { 
      return false
    }
  }
  return stack.length === 0
}

console.log(
  'Valid pairs\n',
  sampleString1, ' : ', validPairs(sampleString1),'\n', // => true
  sampleString2, ' : ', validPairs(sampleString2),'\n', // => false
  sampleString3, ' : ', validPairs(sampleString3),'\n'  // => false
)