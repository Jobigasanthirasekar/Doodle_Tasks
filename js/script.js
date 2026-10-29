 // module 1-10 
//first prg of js-->  eg of comments section
console.log("Hello,world");
console.log(10+1);
console.log("Welcome to coding");
//---------

let eventName="Tech fest"; //assign value
const ticketprice=200;  

console.log(eventName);
console.log(ticketprice);

//---------


console.log(typeof "hello"); // checking data type
console.log(typeof 12);
console.log(typeof true);


//-------------


let score;
score =90;//---> declaration
console.log(score);
console.log(typeof score);
console.log(typeof null);


 //type of conversion and coercion

console.log(String(25));
console.log(Number("12")+3);
console.log(Boolean (1));
console.log(12-3);
console.log ("12"-3);
console.log ("12"+3);


//parameter  passing
function calculateTotal(price,quantity){
    return price*quantity;
}
console.log (calculateTotal(100, 40));


// --------- using call back function

function details(name,callback){
    
   callback(name);
}
 function greet(name){
    console.log("Hello" +" " + name);
 }
  
console.log(details("Maya", greet));

 // create obj  store val  and  change the value later and get output
let book={name:"Aeronautic Concept", 
     Author: "Rao maichel",
     price: 1200
    };
    book.price =1000;

console.log(book.price);
let data={
  name:"Gopal",
  phone_Number:1234567890,
  place:{
    city: "chennai",
    Area: "poonamalee",
  }
};
console.log(data.place.city);
console.log(data.place.Area);

//-----
//Event Loop
console.log("A");
setTimeout(()=>console.log("B"),0);
Promise.resolve().then(()=>console.log("c"));
console.log("D");



console.log("Start");                                           //  1st run callback -->console
setTimeout(()=>console.log("Timer"),0);                         // final callback-->web api-->macro-->console
Promise.resolve().then(()=>console.log("Promise"));             // 3rd callbackk-->micro->console
console.log("D");                                               // 2nd run callback-->console

//-------------

// console method and commands 
 console.log("program start");
 console.warn("check the input");
 console.error("something went wrong");
// Arithmetic operator
console.log(12+3);
console.log(12-3);
console.log(12*3);
console.log(12/3);
console.log(12%3);
console.log(2**3);

//Assingmnet operator and increment operator

let c = 15;
//c +=2; 
//c -=1;
c++;
console.log(c);

// comparion and locil operator

console.log(12>3);
console.log(12<3);
console.log(12>=3);
console.log(3===3);
console.log(3 ==="3");
console.log(3 =="3");

//logical operator
let a =true;
let S=false;
console.log(a && S);
console.log(a || S);
console.log(!S);
// ternary operator and precedence
let m=18;
 let msg= m>=18 ?"Allowed": "Not Allowed";
 console.log(msg);
 console.log(12+ 3*7);
 console.log((1+3)*4);

//if-else but we use in one if  statement to get true or false

let age=17;
if(age>=20){
console.log("you Can reg");
}
else if(age>=12)
{
    console.log("you can view data");

}
else{
    console.log("Not Eligible");
}

//combination condition


let  year=1;
let  month=12;
if(year>=10 && month ==12){
console.log("run");
}
else if(year>=12 || month==2)
{
    console.log("go");

}
else{
    console.log("never");
}

// switch statement practice

let day="Monday";
switch(day){
    case "Saturday":
        console.log("WEEKEND");
        break;
    case "Monday":
        console.log("Week days start");
        break;
    default:
        console.log("enter correct day");
}

//Loop concept for-Loop
for(let i=1;i<=7;i++){
    console.log("Berry" +i);
}

//while-loop
 let count=0;

 while(count<=4){
    console.log("Hello,Heyy!!");
    count++;
 }
 //do-while
 let operation=7;
 do{
    console.log(operation);
    operation++;
 }
 while(operation<= 9);


 // truthy -falsy
 let n =1;
 if(n){
    console.log("Yes it is!!");
 }
 else{
    console.log("No, it is not");
 }
// break -continue 
 for(let k=9;k<=15;k++){
    if(k==13){
    break;
    }
     console.log(k);
 }

 for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

//for-of and for-in

let candis=["jobiga","ram","gopal"]
for(let candi of candis){
    console.log(candi);
}
let candiy=["jobiga","ram","gopal"]
for(let index in candiy){
    console.log(index);
}
