
export default function createGrid(h, w) {
  const grid = [];
  for (let i = 0; i < h; i++) {
    const row = []
    for (let j = 0; j < w; j++) {
      row.push('*');
    }
    grid.push(row)
  }
  return grid;
}

// class Maze {
//   constructor(h = 6, w = 6, options = {}) {
//     this.opts = Object.assign({
//       originPoints: [[0,0], [w - 1, h - 2]]
//     }, options)
//
//     return {
//       grid: this.createGrid(h,w)
//     }
//   }
//
//   createGrid(h,w) {
//     return
//   }
// }
