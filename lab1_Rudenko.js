function num(s){
	var ans = [];
	var hour = Math.floor(s/3600);
	hour<10 ? ans='0'+hour+':' : ans=hour+':';
	var minute = Math.floor((s%3600)/60);
	minute<10 ? ans+='0'+minute+':' : ans+=minute+':';
	var second = Math.floor((s%3600)%60);
	second<10 ? ans+='0'+second+':' : ans+=second;

	console.log(ans);
}


var lor = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sapiente corrupti amet facere dolore, ea adipisci et. Ad officiis modi expedita similique, ullam architecto reiciendis. Consectetur, recusandae nesciunt vitae laudantium!';
var arr = [];
for(var i = 0; i < lor.length; i++){
	if(lor[i] == 'a'){
		arr[arr.length] = i;
	}
}
console.log(arr);
