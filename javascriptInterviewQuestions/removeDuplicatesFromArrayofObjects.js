const books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
];

// const ids = books.map(({ title }) => title);
// const filtered = books.filter(({ title }, index) =>
//     ids.indexOf(title) === index);
// //Here indexOf(title) gives the first occurence of the title.
// console.log(filtered);

//--->using for-in loop<----

function removeDups(books) {
  let newArray = [];
  let newObject = {};

  for (let i in books) {
    objectTitle = books[i]["title"];
    newObject[objectTitle]=books[i];
  }
  //console.log(newObject);

  for(let i in newObject){
    newArray.push(newObject[i]);
  }
  console.log(newArray)
};

removeDups(books);
