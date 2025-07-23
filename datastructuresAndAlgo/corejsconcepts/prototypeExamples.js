function Student(){
    this.name = "Saikrishna",
    this.exp= "8"
    }
    Student.prototype.company = "Hexagon"
    let std1 = new Student();
    //std1.exp = "9"
    let std2 = new Student();
    std2.exp = "10"
    console.log(std1);
    console.log(std2)
    
//Refer this website https://www.tutorialsteacher.com/javascript/prototype-in-javascript

//------>Example:2<------

    // function Student() {
    //     this.name = 'John';
    //     this.gender = 'Male';
    // }
    
    // var studObj1 = new Student();
    // studObj1.age = 15;
    // console.log(studObj1.age); // 15
    
    // var studObj2 = new Student();
    // console.log(studObj2.age); // undefined