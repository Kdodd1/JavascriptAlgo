
function binarySearch(arr, num){
  var min = 0;
  var max = arr.length -1
  var current;

  while(max >= min){
    var current = Math.floor((max + min)/2);
    if (arr[current] < num){
        min = current +1
      }
    else if (arr[current] > num){
        max = current -1;
      }
    else{
      return current
      }
    }
    return -1;
}
