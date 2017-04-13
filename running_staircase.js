// A child is running up a staircase with n steps, and can hop 
// either 1 step, 2 steps, or 3 steps at a time. Implement a method 
// to count how many possible ways the child can run up the stairs.

function waysToTop(steps) {
  if (steps < 0) { 
    return 0         
  } 
  if (steps === 0) {
    return 1 
  }  
  return waysToTop(steps-1) + waysToTop(steps-2) + waysToTop(steps-3)
}

waysToTop(1) // => 1 - true
waysToTop(4) // => 7 - true
waysToTop(0) // => 1 - wrong!

// Lets revist function so it returns 0 for 0 steps input. 
// We need to check when we run function for the first time

function moreWaysToTop(steps, recursiveCall) {
  const overJumped = (steps < 0)
  const atTheTop = (steps === 0)
  if (overJumped || !recursiveCall && atTheTop) {
    return 0         
  } 
  if (atTheTop) {
    return 1 
  }
  return waysToTop(steps-1, true) + waysToTop(steps-2, true) + waysToTop(steps-3, true)
}

moreWaysToTop(0) // => 0 - better