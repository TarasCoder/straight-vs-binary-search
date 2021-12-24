let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let res = 8;

console.time("straight")
straightSearch()
console.timeEnd("straight")

console.time("binary")
binarySearch(arr, res)
console.timeEnd("binary")

// Functions
function straightSearch(){
    for (let i = 0; i < arr.length; i++) {
        if (i === res){
            return console.log("Found element: " + i)
        }
    }
}
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
