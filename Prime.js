function myfunction(number){
	let count = 0;
for(let i = 1;i<=num;i++){
if(num%i==0){
	count++;	
} 
} if(count==2){
	return true;
} else{
	return false;
}	
}
let ans = myfunction(13);
if(ans == true){
	console.log('prime nomber')
} else{
	console.log('not a prime nomber' );
}

