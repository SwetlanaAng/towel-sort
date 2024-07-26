
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let ans = [];
    let arr = [];
    if(matrix === undefined) return ans;
    for(let i = 0; i<matrix.length; i++){
        arr=matrix[i];
        if(i%2 == 0){
            for(let i = 0; i<arr.length; i++){
                ans.push(arr[i]);
            }
        }else {
            for(let i = arr.length-1; i>=0; i--){
                ans.push(arr[i]);
            }
        }
    }
  return ans;
}

