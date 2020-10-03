
exports.min = function min (array) {
  if (array){
    let result = array.sort( (a, b) => a - b )[0];
    if (result) return result;
  }
  return 0;
}

exports.max = function max (array) {
  if (array){
    let result = array.sort( (a, b) => b - a )[0];
    if (result) return result;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array){
    let result = (array.reduce((sum, current) => sum + current, 0) / array.length);
    if (result) return result;
  }
  return 0;
}
