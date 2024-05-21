//QUESTION 1
var city = prompt("Where do you live?");
var rightAns = "karachi";

if(city === rightAns){
        alert("Welcome to city of lights")
}
else{
        alert("Wrong City")
}

//QUESTION 2
var gender = prompt("Enter your gender?");
var rightAns1 = "Female";
var rightAns2 = "Male";

if(gender === rightAns1){
        alert("Good Morning Ma’am.")
}
if(gender === rightAns2){
        alert("Good Morning Sir.")
}
else{
        alert("wrong")
}

//QUESTION 3
var signalColor = prompt("Enter the color of the road traffic signal:").trim().toLowerCase();
    var message;

    if (signalColor === "red") {
        message = "Must Stop";
    } else if (signalColor === "yellow") {
        message = "Ready to move";
    } else if (signalColor === "green") {
        message = "Move now";
    } else {
        message = "Invalid color entered";
    }

    document.write("<table border='1'>");
    document.write("<tr><th>Signal Color</th><th>Message</th></tr>");
    document.write("<tr><td>" + signalColor + "</td><td>" + message + "</td></tr>");
    document.write("</table>");


//QUESTION 4
    var remainingFuel =prompt("Enter the remaining fuel in your car (in liters):");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}


//5:Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

var a = 4;
        if (++a === 5){
            alert("given condition for variable a is true");
        }

        //b:
        var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true");

}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


//e:
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    //f:
    if("car" < "cat"){
        alert("car is smaller than cat");
        }

        // 6. Write a program to take input the marks obtained in three
        // subjects & total marks. Compute & show the resulting
        // percentage on your page. Take percentage & compute
        // grade as per following table:
        var subject1 = prompt("Enter the marks obtained in Subject 1:");
    var subject2 =prompt("Enter the marks obtained in Subject 2:");
    var subject3 = prompt("Enter the marks obtained in Subject 3:");

    
    var totalMarks = prompt("Enter the total marks:");


    var marksObtained = subject1 - subject2 - subject3;
    var percentage = (marksObtained / totalMarks) * 100;


    var grade, remarks;
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage <= 60) {
        grade = "Fail";
        remarks = "Sorry";
    } else {
        grade = "F";
        remarks = "Fail";
    }

    // Display the results
    document.write("<h1>Marksheet</h1>")
    document.write("<table border='1'>");
    document.write("<tr><th>Total Marks</th><td>" + totalMarks + "</td></tr>");
    document.write("<tr><th>Marks Obtained</th><td>" + marksObtained + "</td></tr>");
    document.write("<tr><th>Percentage</th><td>" +  percentage.toFixed(2)+ "%</td></tr>");
    document.write("<tr><th>Grade</th><td>" + grade + "</td></tr>");
    document.write("<tr><th>Remarks</th><td>" + remarks + "</td></tr>");
    document.write("</table>");


// 7 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 8;


var userGuess =prompt("Guess the secret number (between 1 and 10):");


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} 
else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} 
else {
    alert("Try again! The secret number was " + secretNumber);
}





//8: Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


var number =prompt("Enter a number to check if it is divisible by 3:");

    if (number / 3 === 0) {
        alert("The number " + number + " is divisible by 3.");
    } 
    else {
        alert("The number " + number + " is not divisible by 3.");
    }



// //9:Write a program that checks whether the given input is an
// even number or an odd number.


    var number = prompt("Enter a number to check if it is even or odd:");


    if (number % 2 === 0) {
        alert("The number " + number + " is even.");
    } 
    else {
        alert("The number " + number + " is odd.");
    }


// 10:Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

    var temperature =prompt("Enter the temperature:");

    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("Temperature is too low.");
    }


    