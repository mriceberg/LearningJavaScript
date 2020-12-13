/*
 
 //Functional programming lab
var weather = [72,84,34,56,92,24,85,72,54];
var goOutside = weather.filter (function(temp){
    return temp = 70;})
console.log(goOutside);
var forecast = [
    {day: "Monday", sun: true },
    {day: "Tuesday", sun: false},
    {day: "Wednesday", sun: false},
    {day: "Thursday", sun: true},
    {day: "Friday", sun: false},
    {day: "Saturday",sun: true},
    {day: "Sunday", sun:false}
];
var goodDays = forecast.filter(function(weather) {
    return weather.sun;
})
for (i = 0; i < goodDays.length; i++) {
    var day = goodDays [i];
    console.log (day);
}



// lab: map 
var numbers = [5,10,15,20,25];
var triples = numbers.map(function(nos){
    return nos * 3;
})
console.log(triples);


//chaining 
var number = [2,4,6,8,10];
var doubles = number.map(function(nums){
    return nums * 2;
}).map (function(nums){
    return nums + 1 ;
});
console.log(doubles);


var politeGreetings = ["hello","hi","bonjour","hola"];
var shoutGreetings = politeGreetings.map(function(yell){
    return yell.toUpperCase();
});
var myFirstWord = shoutGreetings[0];
console.log(myFirstWord);

//reduce
 var myElements = [1,2,3,4,50, 34, 4, 12];
 var myFaveElements = myElements.reduce(function(ac, cv, ci, ar){
    console.log(`${ac} ${cv} ${ci}`);
    var largestValue = ac;
    if (ac<cv){
      largestValue = cv;    
    } 
    return largestValue;
 }, 1);
 console.log(myFaveElements);

var myNames = ["Sam", "Anne", "Alain", "Mary"];
var myListofNames = myNames.map (function(cv){
    return cv.toUpperCase();
}).reduce(function(ac, cv){
return cv + " " + ac; 
},"");
console.log(myListofNames);

//Identify Unique String
function areAllCharactersUnique (someText){
    var namesInUpperCase = someText.toUpperCase();
    for ( i = 0; i < namesInUpperCase.length; i++) {
        var currentCharacter = namesInUpperCase[i];
        var firstIdx = namesInUpperCase.indexOf(currentCharacter);
        var lastIdx = namesInUpperCase.lastIndexOf(currentCharacter);
        if (firstIdx != lastIdx){
            return false ;
        }
    } 
    return true; 
}
console.log(areAllCharactersUnique("Shazeera"));
console.log(areAllCharactersUnique("ABba"));
console.log(areAllCharactersUnique("abcdefghijklmnopqrstuvwxyz"));
*/

//Identiy longest word in a string
//forloop, if statement, split method
//reminder : split()=string, split("")=substrings split=(array)

//lab question: Identify longest word in a string

var myBestFriends =  "Alain Minou Safra Shazeera";
var mySentence = "Hello my name is slimshady";

function longestName (names) {
    var separateFriends = names.split(" ");
    var longestName = 0;
    for (i=0; i < separateFriends.length; i++) {
        var currentName = separateFriends[i];

       if (currentName.length > longestName){
           longestName = currentName.length;
       } 
       
    }
    return longestName;
}

var myLongestBestFriend = longestName(myBestFriends);
console.log(myLongestBestFriend);
var word = longestName(mySentence);
console.log(word);
