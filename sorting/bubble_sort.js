// Implement sorting algorithms:
// - Bubble sort

const data = [11, -1, 3, 0, -1, -1, 0, 9]

function bubleSort (items) {
  let sorted = false
  const swap = (item, index, items) => {
    if (items[index] > items[index+1]) {
      [items[index], items[index+1]] = [items[index+1], items[index]] // swap
      return false
    } else {
      return true
    }   
  }
  while (!sorted) { 
    sorted = items.every(swap)
  }
}

bubleSort(data) // => [-1, -1, -1, 0, 0, 3, 9, 11]