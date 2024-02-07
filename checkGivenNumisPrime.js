function isPrime(n){
	let count=0;
	for(let i=0;i<=n;i++)
	{

	if(n%i==0){
     count++;
	}
  }
  console.log("count is: "+ count)
//   if(count>2)
//   {
// 	console.log(0);
//   }
//  else
//  {
//    console.log(1);
// }
const result=count>2?1:0;
console.log(result);
  }


isPrime(22);


