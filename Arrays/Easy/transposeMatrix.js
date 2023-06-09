// Time O(w*h), Space O(w*h) w = width, h = height

function transposeMatrix(matrix) {
    let transposedMatrix = [];
    for (let col = 0; col < matrix[0].length; col++) {
      let newRow = [];
      for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][col]);
      }
      transposedMatrix.push(newRow);
    }
    return transposedMatrix;
  }

  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  console.log(transposeMatrix(matrix));