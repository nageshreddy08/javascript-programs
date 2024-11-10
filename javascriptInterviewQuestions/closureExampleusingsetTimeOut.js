//Q:Print numbers from 1 to 5 with incrementing the time  

/*Here if we use var the value of i becomes 6, since var has global scope and setTimeout 
takes the closure of the variable along with it and each setTimeout func., points to same spot/location of the
variable in the memory.
*/
/*
function printNumbers(){
    for (var i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000)
        
    }
}
printNumbers();
*/
/*Here if we use let, we can get the expected output, since let has block scope, for every iteration of loop
the variable will be a new one(means it creates a new copy of the variable). We can assume 
whenever the arrow func., is called it refers to different memory location of i(copy one)which is in scope.
*/
/*
function printNumbers2(){
    for (let j=1;j<=5;j++){
        setTimeout(()=>{
            console.log(j);
        },j*1000)
        
    }
}
printNumbers2();

*/
/*We can achieve by using "var" also, by calling a function inside the main function
Here whenever we call a function close(), it creates a new copy of i, everytime the setTimeout is called.

*/
function printNumbers3(){
    for(var k=1;k<=5;k++){

        function close(x){
            setTimeout(()=>{
                console.log(x)
            },k*1000)
        }
        close(k);
    }
}
printNumbers3()