function maxMinAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total = total + arr[i];
		if(min > arr[i]){
			min = arr[i];
		}
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + (total/arr.length);
}
