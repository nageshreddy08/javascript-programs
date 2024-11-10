//------This is Shallow copy example---->
/*
let firstObject={
    name:"Nag",
    age:27
};

let secondObject=firstObject;

console.log("first obj :", firstObject);
console.log("second obj :", secondObject);

console.log("after modify")
firstObject.name="maggie"

console.log(firstObject);
console.log(secondObject);
//----Deep copy----using JSON.parse and JSON.stringify()----
// */
// let employee1={
//     eid:12,
//     ename:"ram",
//     getInfo: function(){
//         return this.eid +" "+ this.ename;
//     }
// }

// let employee2=JSON.parse(JSON.stringify(employee1));

// console.log("employee 1 :", employee1)
// console.log("Employee 2 :", employee2);
// console.log("After modify...")
// employee2.ename="kranthi"
// //console.log(employee2.getInfo());//Here we cannot deep copy functions and nested arrays.
// console.log("employee 1 :", employee1)
// console.log("Employee 2 :", employee2);


//---Using lodash----
console.log("using lodash...")

const lodash = require('lodash');
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());


//Note:By using lodash we can deep copy serilizable values and functions as well.