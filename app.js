//=============ASSIGNMENT#1===================//
//2. Write a script to display following message on your web
// page:
function validatePassword() {
    var passwordInput = document.getElementById("password").value;
  
    if (passwordInput === "") {
      alert("Error: please enter a valid password");
    } else {
      // Here you can add additional validation logic for the password if needed
      // For example, checking length, special characters, etc.
    }
  }

//  1. Write a script to greet your website visitor using JS alert box.

  var userName = prompt("What is your name?");
  
  var greetingMessage = "Hello, " + userName + "! Welcome to my Netflix clone!";
  
  alert(greetingMessage);
//   3. Write a script to display following message on your web
// page: (Hint : Use line break)
  
alert("Welcome to JS land...\nHappy Coding");

//   4. Write a script to display following messages in sequence:
 
alert("Welacome to JS land...");
  // Show dialogue with checkbox to prevent additional dialogue boxes
  var preventDialogues = confirm("Happy Coding\n\nPrevent this page from showing additional dialogue boxes?");
  if (!preventDialogues) {
      alert("Happy coding...");
  }
  console.log("Hello... I can run js through my web browser's console");
 // =============ASSIGNMENT#2============//
  //1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
var myname='fatima pervaiz';
// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
let user_name = prompt("What is your name");
let age = prompt ("what is your age");
let qualification = prompt ("What is your qualification");
alert(user_name);
alert(age);
alert(qualification);
//5.
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
 var email = "fatimapervaiz295@gmail.com";
 alert("My email address is "+ email)
//  7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "A smarter way to learn JavaScript "
alert("I am trying to learn from Book, "+book);
//8. Write a script to display this in browser through JS
document.getElementById("content").innerHTML = "yeah! i can write HTML content through javascript";
//9. Store following string in a variable and show in alert and
//browser through JS
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

 //===========ASSIGNMENT#3==========//
 //1.
var age1= 18;
alert("I am "+age1+" years old");
//2
let visitCount = localStorage.getItem('visitCount') || 0;

visitCount++;

// Store the updated visit count back to localStorage
localStorage.setItem('visitCount', visitCount);

alert('You have visited this site '+visitCount +' times.');

//3
 
 let birthYear = 2006;

 let message1 = 'My birth year is '+birthYear;
 let dataTypeMessage = 'Data type of my declared variable is '+typeof birthYear;

 document.getElementById('message').innerHTML = message1 +'<br>'+ dataTypeMessage;

//4

var visitorN = prompt("Enter name");
var productTitle = prompt("Enter Product title");
var quantity = prompt("Enter quantity of product");
alert(visitorN+" ordered "+quantity+" "+productTitle+"(s) on xyzClothing")

//============ASSIGNMENT#4==============//
//1
//var my_name, fathername, motherName;
//2
//var usernName, $name1, your_name, n1, _name; //LEGAL NAMES
//let 1stname, user name, your-name, var,alert; (ILLEGAL NAMES)

//3
let content = '<h1>Rules for naming JS variables</h1><p>Variable names can only contain <strong>letters, numbers, dollar signs ($), and underscores (_)</strong>. For example: <code>$my_1stVariable</code></p><p>Variables must begin with a <strong> letter, dollar sign ($), or underscore </strong>(_). For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p><p>Variable names are case <strong>sensitive</strong>.</p><p>Variable names should not be JS <strong>keywords</strong>.</p>';


// Display the content in the browser
document.getElementById('content1').innerHTML = content;


//============ASSIGNMENT#5============//
//1
var no1= prompt("Enter first operand for addition")
var no2= prompt("Enter second operand for addition")
var num1 = parseFloat(no1)
var num2 = parseFloat(no2) 
var sum = num1+num2;
 document.getElementById('sum').innerHTML='Sum of '+no1+' and '+no2+" is "+ sum;

 //2
 //SUBTRACTION
 var no1= prompt("Enter first operand for subtraction")
 var no2= prompt("Enter second operand for subtraction")
 var num1 = parseFloat(no1)
 var num2 = parseFloat(no2) 
 var subtraction = num1-num2;
 document.write("<br>Subtraction of "+num1+" and "+num2+" is "+subtraction)
 //MULTIPLICATION
 var no1= prompt("Enter first operand for multiplication")
var no2= prompt("Enter second operand for multiplication")
var num1 = parseFloat(no1)
var num2 = parseFloat(no2) 
var multiplication = num1*num2;
document.write("<br>Multiplication of "+num1+" and "+num2+" is "+multiplication)
//DIVISION
var no1= prompt("Enter first operand for division")
var no2= prompt("Enter second operand for division")
var num1 = parseFloat(no1)
var num2 = parseFloat(no2) 
var division= num1/num2;
document.write("<br>Division of "+num1+" and "+num2+" is "+division)
//MODULUS
var no1= prompt("Enter first operand for modulus")
var no2= prompt("Enter second operand for modulus")
var num1 = parseFloat(no1)
var num2 = parseFloat(no2) 
var modulus = num1%num2;
document.write("<br>Modulus of "+num1+" and "+num2+" is "+modulus)
//3
var my_var;
document.write("<br><br> value after variable declaration is "+my_var)
my_var = 5;
document.write("<br>Initial value is: "+my_var)
my_var++;
document.write("<br> value after increment is: "+my_var)
my_var+=7;
document.write("<br> value after addition is: "+my_var)
my_var--;
document.write("<br> value after decrement is: "+my_var)
my_var%=3;
document.write("<br> The remainder is: "+my_var)
//4
var cost=600;
cost*=5;
document.write("Total cost to buy 5 tickets to a movie is "+cost+"PKR")
//5
var no = prompt("Enter number for multiplication table")
var num = parseInt(no)
for(let i=1;i<=10;i++){
document.write(num+" x "+i+" is "+num*i)
document.write("<br>")
}
//6
 var cals=prompt("Enter temperature to convert Fahrenhite")
 var Celsius = parseFloat(cals)
 var Fahrenhite = (Celsius*9/5)+32;
 var F=prompt("Enter temperature to convert celsius")
 var fahrenhite= parseFloat(F)
 var celsius=(fahrenhite-32)+5/9;
 document.write("<br><br> "+Celsius+"<sup>o</sup> is "+Fahrenhite+"<sup>o</sup>")
 document.write("<br> "+fahrenhite+"<sup>o</sup> is "+celsius+"<sup>o</sup>")

 //7

var priceItem1 = 500;
var priceItem2 = 250;
var quantityItem1 = 2; 
var quantityItem2 = 3; 
var shippingCharges = 300; 

// Calculate the total cost
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

document.write(`
    <h1>Shopping Cart</h1>
    <p>Price of item 1 is ${priceItem1}</p>
    <p>Quantity of item 1 is ${quantityItem1}</p>
    <p>Price of item 2 is ${priceItem2}</p>
    <p>Quantity of item 2 is ${quantityItem2}</p>
    <p>Shipping charges is ${shippingCharges}</p>
    Total Cost of your order is: ${totalCost}
`);
//8
var totalMarks = 850;
var obtainMarks = 839;
document.write("<br><h1>Marks Sheet</h1>Total marks: "+totalMarks+"<br>Obtained marks: "+obtainMarks+"<br>Percentage is: "+(obtainMarks/totalMarks)*100+"%")
//9

var usDollars = 10;
var saudiRiyals = 25;

var usdToPkr = 104.80;
var sarToPkr= 28.00;

var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

document.write("<br><h1> Currency in PKR </h1>Total Currency in PKR: " + totalPkr);
//10
var number = 15;
document.write("<br><br><h3>Final answer is "+((number+5)*10)/2+"</h3>")
//11

var currentYear = 2024; 
var myBirthYear = 2006;    

var age1 = currentYear - myBirthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>Current year: "+currentYear+"<br>Birth year: "+myBirthYear+"<br>Your age are either " + age1 + " or " + age2 + " years old.");
//12
var radius = 2.5;
var circumference = 2*3.142*radius;
var area = 3.14*radius*radius;
document.write("<h1>The Geometrizer</h1>Radius of Circle: "+radius+"<br>circumference of circle: "+circumference+"<br>Area of circle is: "+area)
//13

var favoriteSnack = "chocolate bar";

var currentAge = 15;

var maxAge = 65;

var amountPerDay = 2; 

var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365; 
var totalSnacksNeeded = daysRemaining * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>Favourite snack: "+favoriteSnack+"<br>Current age: "+currentAge+"<br>Estimated Maximum age: "+maxAge+"<br>You will need " + totalSnacksNeeded + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge);


//-------------------ASSIGNMENT#6-9--------------------------//

1
var num = 10;

document.write("<h1>Result</h1>The value of a is: " + num);
document.write("<br>The value of ++a is: " + ++num);
document.write("<br>The value of a is: " + num);
document.write("<br>The value of a++ is: " + num++);
document.write("<br>The value of a is: " + num);
document.write("<br>The value of --a is: " + --num);
document.write("<br>The value of a is: " + num);
document.write("<br>The value of a-- is: " + num--);
document.write("<br>The value of a is: " + num);
2
a=0
b=1
result = 3

3
var userName = prompt("Enter your name:");
document.write("Hello, " + userName + "! Welcome to our website.");
4
//Take input a number from user
var  number = 0;
number = prompt("Enter a number for multiplication table:");

if(number==0){
    number=5;
}
document.write("Multiplication table of " + number + ":<br>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
//5

var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");

var totalMarks = 100;
var grandTotal = totalMarks*3;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

obtainedMarks1 = parseInt(obtainedMarks1);
obtainedMarks2 = parseInt(obtainedMarks2);
obtainedMarks3 = parseInt(obtainedMarks3);

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
var percentage1 = (obtainedMarks1 / (totalMarks * 3)) * 100;
var percentage2 = (obtainedMarks2 / (totalMarks * 3)) * 100;
var percentage3 = (obtainedMarks3 / (totalMarks * 3)) * 100;

document.write("<table ><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
document.write("<tr><td></td><td><b>" + grandTotal + "</b></td><td><b>" + totalObtainedMarks + "</b></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");

