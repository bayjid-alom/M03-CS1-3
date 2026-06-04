let balanceAmount = 500;
let withdrawAmount = 1500;

if(withdrawAmount <= balanceAmount){
    if(withdrawAmount % 500 ===0){
        console.log("Withdraw Successfull!!")
    }
    else{
        console.log("Enter amount multiple of 500");
    }  
}
else{
    console.log("Insufficient Balance!")
}

