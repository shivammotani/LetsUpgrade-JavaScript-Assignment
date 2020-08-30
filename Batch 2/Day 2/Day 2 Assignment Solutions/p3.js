let strArray = ["Hi", "Hello", "My", "World", "Computer"];
let toSearch = "My";
let search = strArray.indexOf(toSearch);


if (search >=0){
console.log(`Element ${toSearch} found at location ${search}`);
}
else{
  console.log(`Element ${toSearch} not exist`);
}
