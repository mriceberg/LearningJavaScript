var userName = prompt ("What is your name?");
if ( userName != null){
    console.log ("Hello " + userName); 
} else {
    console.log ("Hello");
}
var userQuestion = prompt ("Please ask a question!") ;
console.log(userName + " asks " + userQuestion);
var randomNumber = Math.floor(Math.random()* 8);
var eightBall = "";
switch (randomNumber){
    case 0 : 
    eightBall = "Better not tell you"
    break;
    case 1 : 
    eightBall = "Concentrate and ask again"
    break;
    case 2 :
    eightBall = "Reply hazy try again"
    break;
    case 3 :
    eightBall = "Cannot predict now"
    break;
    case 4 :
    eightBall = "My reply is no"
    break;
    case 5 :
    eightBall = "Outlook not so good"
    break;
    case 6 :
    eightBall = "Signs point to yes"
    break;
    case 7 :
    eightBall = "Not so sure"
    break;
}
console.log( eightBall);