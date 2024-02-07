function pattern2(n){


    for(let row=1;row<=n;row+=1){

         let str="";
        for(let col=1;col<=row;col+=1){  //only change is the limit of loop

         str+="*";
        }
        console.log(str);
    }


}

pattern2(5);