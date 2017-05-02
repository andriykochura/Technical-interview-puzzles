// Given a list of movement commands (up, down, left, right, undo previous action), 
// write a function that returns the final (x,y) coordinate. 

const move = (start, movements) => {
  let index = 0  
  const path = []
  const total = movements.length
  const getNext = (point, command) => {
    let [x, y] = point
    switch (command) {
      case 'left': 
        x--
        break
      case 'right':
        x++
        break
      case 'up':
        y++
        break
      case 'down':
        y--
        break
    }
    return [x, y]
  }
  while (index < total) {
    let move = movements[index]
    if (move === 'undo') {
      path.pop()
    } else {
      let point = (path.length > 0) ? path[path.length - 1] : start
      let final = getNext(point, move)
      path.push(final)
    }
    index++
  }
  return (
    path.length > 0 ? path.pop() : start
  )
}

const start = [-1, -1]
const moves = ['left', 'right', 'up', 'up', 'undo', 'right', 'right', 'down', 'undo']

move(start, moves) // => [1, 0]