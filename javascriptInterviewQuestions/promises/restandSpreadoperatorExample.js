// Collects multiple elements and transforms them into single array..
function restEx(...elements){
    console.log(elements);

}

restEx("a","b","c","d");

//Expands array into individual elements..
function spreadEx(e1,e2,e3,e4){
    console.log( e1,e2,e3,e4);

}
spreadEx(...["abc","xyz"])