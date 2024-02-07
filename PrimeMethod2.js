function isPrimeMethod(n){
	let count=1;
    if((n>0) && (n!=1))
    {
	for(let i=1;i<=n/2;i++)
	{
//  % means division-->it gives remainder as output
//  / means division-->it gives quotient as output
	if(n%i==0){
     count++;
	}
  }
  console.log("count is: "+ count)
   const result=count>2?0:1;
   //console.log(result);
   return result;
}

else{
//console.log("enter valid number")
 return "Invalid Number"
}
}

isPrimeMethod(25);
