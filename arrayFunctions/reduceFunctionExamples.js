const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];
  //using reduce array method
  //Given an array of objects users, print user of particular age along with their frequency.
  
  const output=users.reduce((acc,curr)=>{
    if(acc[curr.age])
    {
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
        console.log(acc);
    }
    return acc;
  },{})
  console.log(output);