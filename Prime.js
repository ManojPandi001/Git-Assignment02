function checkPrime(number){
    let factor=0;
    for(let i=1; i<=number; i++){
        if(number%i==0){
            factor=0;
        }
    }
    if(factor==2){
        return true;
    }else {
        return false;
    }
    
    
}

let ans=checkPrime(17)
if(ans==true){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}

