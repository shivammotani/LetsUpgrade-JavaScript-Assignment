let str = "Letsupgrade";
let found = false;
let toSearch = "a";

for(var i=0; i<str.length; i++){
  if (toSearch === str[i])
  {
    found = true;
    break;
  }
}
if(found === true)
{
  console.log(`${toSearch} found at location ${i}`);
}
else{
  console.log(`${toSearch} not exist`);
}
