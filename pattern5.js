function upperTriangle(n){
//upper triangle consists of n rows  
        for(let row=1;row<=n;row+=1){
    
            let space=n-row;
            let str="";
            for(let j=1;j<=space;j+=1)
            {
                str+=" ";
    
            }
            let star=2*row-1;
            for(let col=1;col<=star;col+=1){
     
                str=str+"*";
    
            }
            console.log(str);
        }
    }
    
    function lowerTriangle(n){

// lower  triangle consists of n-1 rows  
for(let row=1;row<=n-1;row+=1){
 let str="";
 let spaces=row;
 for(let j=1;j<=spaces;j+=1){

    str+=" ";
}
let stars=2*(n-row)-1;
for(let col=1;col<=stars;col+=1){
    str+="*";

}
console.log(str);
}
    }

    function pattern6(n){
        upperTriangle(n);
        lowerTriangle(n);
    }

pattern6(3);
    
    
    
   