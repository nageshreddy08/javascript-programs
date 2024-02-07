function fibonacciNumber(n){//here n in how many numbers u want to print ex:first 5 fibonacci numbers etc.,
    if(n==0){
        console.log(n);
     return;
    }
    else if (n>=1){
        console.log(0);
        console.log(1);
    }
let lastdigit=0
let secondlast=1;
for(let i=2;i<=n;i++){
res=lastdigit+secondlast;
console.log(res)
lastdigit=secondlast;
secondlast=res;

}
}
fibonacciNumber(5);

