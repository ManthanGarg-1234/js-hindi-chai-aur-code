const accountId = 144553;
let accountEmail = "manthan@garg.com";
var accountPasswd = "12345";
accountCity = "Kaithal";
let accountState;
// if we declare any variable ans const then afterwards we can't change its value
// accountId = 2;
console.log(accountId);
accountEmail = "garg@manthan.com";
accountPasswd = "21212121";
/*
this is not a good practice to write but still you should know 
that in this way also variables can be declared and for these types also we can changes their values afterwards
*/
accountCity = "Chandigarh";

// better than log it will show table of data
console.table([
  accountId,
  accountEmail,
  accountPasswd,
  accountCity,
  accountState,
]); //accountState comes undefined

/*
variables ko declare karne ke 2 tarike hai let and var 
var ab hum use nhi karte hain
scope --> {} 
var ke andar scope ka problem hota hai that is why we use in modern days letcinstead of var
*/
