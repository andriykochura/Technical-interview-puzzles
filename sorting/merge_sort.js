// Implement sorting algorithms:
// - Merge sort

const data = [11, -1, 3, 0, -1, -1, 0, 9]
const merge = (left, right) => {
  let result = []
  while(left.length && right.length) {
    if (left[0] <= right[0]){
      result.push(left.shift())
    }
    else {
      result.push(right.shift())
    }
  }
  if (left.length) {
    result = result.concat(left)
  } else {
    result = result.concat(right)
  }
  return result
}

function mergeSort(list) {
  if (list.length < 2) {
    return list
  }
  const midIndex = Math.floor(list.length / 2)
  const left = list.slice(0,midIndex)
  const right = list.slice(midIndex)

  return merge(mergeSort(left), mergeSort(right))
}

mergeSort(data) // => [-1, -1, -1, 0, 0, 3, 9, 11]