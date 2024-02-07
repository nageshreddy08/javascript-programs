function pattern3(n){
    //print spaces followed by stars
    
        for(let row=1;row<=n;row+=1){
    
            let space=n-row;
            let str="";
            for(let j=1;j<=space;j+=1)
            {
                str+=" ";
    
            }
            let star=row;
            for(let col=1;col<=star;col+=1){
     
                str=str+"*";
    
            }
            console.log(str);
        }
    }
    
    pattern3(5);