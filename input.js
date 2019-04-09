
but_add.addEventListener("click",open)

function open(){

	var obj = {};

	var inp = document.getElementsByTagName("input");
	var n ='';
	for(var i=0; i<inp.length; i++){
		obj["name"+i]=inp[i].value;
		n+= obj["name"+i] + " ";
	}
	 console.log(n);
}

