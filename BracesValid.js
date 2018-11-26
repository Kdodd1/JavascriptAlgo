function braceValid(string){
  var tempArr = [];
  var count = 0;
  var count2 = 0;
//[ {[]()} ]
  for(var i = 0; i < string.length; i++){
    if(string[i] == "{"){
      tempArr.push(string[i]);
      count ++;
    }
    if(string[i] == "["){
      tempArr.push(string[i]);
      count ++;
    }
    if(string[i] == "("){
      tempArr.push(string[i]);
      count++;
    }
    if(string[i] == "]" && tempArr[count-1] == "["){
      tempArr.pop()
      count--;
    }
    if(string[i] == ")" && tempArr[count-1] == "("){
      tempArr.pop()
      count--;
  }
  if(string[i] == "}"){
    count2++;

    }
  }
  for(var j = 0; j < count2; j++){
    tempArr.pop()
  }
  return tempArr;
}
