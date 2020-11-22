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
if (randomNumber ==0){
    eightBall = "Better not tell you"
} else if (randomNumber==1){
    eightBall = "Concentrate and ask again"
} else if (randomNumber==2) {
    eightBall = "Reply hazy try again"
} else if (randomNumber==3) {
    eightBall = "Cannot predict now"
} else if (randomNumber==4){
    eightBall = "My reply is no"
} else if (randomNumber==5) {
    eightBall = "Outlook not so good"
} else if (randomNumber==6){
    eightBall = "Signs point to yes"
} else if (randomNumber==7){
    eightBall = "Not so sure"
} else {eightBall= "try again"};
console.log(eightBall);



// Here is another version of the switch/if..else
var answers = ["Better not tell you", "Concentrate and ask again", "Reply hazy try again", 
               "Cannot predict now",  "My reply is no", "Outlook not so good",
               "Signs point to yes", "Not so sure"];
var eightBallAnswer = answers[randomNumber];
console.log(eightBallAnswer);