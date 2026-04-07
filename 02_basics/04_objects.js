// const tinderUser = new Object()  // singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    // fullname is a object inside regularUser
    userfullname: {
      //username is another object inside fullname object
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname.lastname);  //undefined as first name is not an object and it doen not containd lastname

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { obj1, obj2 }; //whi same arrays wali problem hogi aise likhoge toh object ke andar object

// console.log(obj3);

// // solve above issue in this way

// console.log(Object.assign({}, obj1, obj2, obj4))  // read what is the significan of {} inside Object.assign as without it also working is same

// using spread operator as we did in arrays
// const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

// database se values iss form mein aati hain
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// users[1].email  //accesing
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
console.log(tinderUser.hasOwnProperty("Logged")); //false

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor //accessing in this way

const { courseInstructor } = course; // OR   const {courseInstructor : instructor} = course

console.log(courseInstructor); // OR console.log(instructor);

// will study later

// JSON structure

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// object structure for api's
[{}, {}, {}];
