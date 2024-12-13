function firstWord(s) {
  // your code here
	let str = "";
	if(s.includes(" ")){
		str = s.trim()
		let arr = str.split(" ")
		return arr[0]
	}else{
		return s;
	}
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s));
