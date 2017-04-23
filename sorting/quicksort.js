// Implement sorting algorithms:
// - Quicksort

// Lomuto partition - pivot is the last element
const data = [11, -1, 3, 0, -1, -1, 0, 9, 2]
const quicksort = (list, start, end) => {
  let i = start || 0
  let j = end || (list.length - 1)
  if (j - i <= 1) { 
    return 
  }
  while (i < j) {
    if (list[i] > list[j]) {
      [ list[i], list[j-1] ] = [ list[j-1] , list[i] ];
      [ list[j], list[j-1] ] = [ list[j-1] , list[j] ];
      j--
    } else {
      i++
    }
  }
  quicksort(list, start || 0, j-1)
  quicksort(list, j + 1, end || (list.length - 1))
}  

quicksort(data) // => [ -1, -1, -1, 0, 0, 2, 3, 9, 11 ]