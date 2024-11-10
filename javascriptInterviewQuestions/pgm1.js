const obj = {
    name: "Conner",
    age: 27,
    greet: () => {
      console.log(`Hey, my name is ${this.name}`);
    },
  };
obj.greet();//Here output is:Hey, my name is undefined, because arrow function does not have "this", 
//so use regular function greet:function(){}

