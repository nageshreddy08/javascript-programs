
//fibonacci series:0,1,1,2,3,5,8,13,21,34...
function checkFibonacci(num){
    if(num===0 || num===1) return true;

    let first=0;
    let second=1;
    

for(let i=2;i<=num;i++)
{
    let res=first+second;
    first=second;
    second=res;
    //console.log(res);
    if(res===num){
       // console.log("Given number ",num, "is a fibonacci")
        return true;
    }
    else{
        //console.log("Not a fibonacci")
        continue;
    }

}
return false;
}
console.log(checkFibonacci(13));