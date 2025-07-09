
async function getData(){
    const URL="https://api.github.com/users/nageshreddy08"
try{
    
    const data=await fetch(URL);
    const jsonData=await data.json();
    console.log(jsonData);
}
catch(err){
    console.log("enter catch");
    console.log("User details not found"+err)
}

}
getData();