
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  if ((Array.isArray(matrix)) && arguments.length != 0){
    for (let i=0; i<matrix.length; i++) {
        if (i%2 == 0){
            arr.push((matrix[i].flat(Infinity)).sort((a, b) => a - b));
        }
        else{
            arr.push((matrix[i].flat(Infinity)).sort((a, b) => b - a));
        }
    }
    return arr.flat(Infinity);
  }
  else {
    return [];
  }

}
