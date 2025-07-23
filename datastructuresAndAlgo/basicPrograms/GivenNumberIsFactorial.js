function FactorialNum(n)
//using normal approach//
{
    let fact=0;
    if(n<=0 || n==1)
    {
        return 1;
    }
else{
    for(let i=1;i<=n/2;i++){
    if(n%i==0){
        fact++;
    }
    }
    if(fact>2){

        console.log(n + " is a factorial number");
        console.log("Number of factorials: "+fact);
    }
    else{
        console.log(n + " is not a factorial number ");
    }
    }
    //console.log(n + " is a factorial number : "+ 1);
    }
    
    FactorialNum(13)