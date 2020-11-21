//while (expression){body code/action}
var i = 6;
while (i<6) {
    console.log (i<6);
    i++;
}
//do (expression){initialise;run;update}
var counter = 0
do {
    console.log(counter);
    counter--;
} while (counter>0);

//create an array number values
//loop through the array with a "for loop"
// run each element of the array through an if, else, else if clause like in last lab with at least two else if option
var myArray = [1,3,5,9,11,12, 17, 19];
for ( var x = 0;
    x < myArray.length;
    x++ ) { 
        var myArrayElement = myArray[x];

        if (myArrayElement < 6) {
            console.log("<5");
        } else if (myArrayElement > 8) {
            console.log(">8");
        } else {
            console.log("does not work");
        }

        console.log(x + ": " + myArrayElement); // 0: 1, 1: 3, 2: 5
    } 

function alert(msg) {console.log(msg);}
    var autumnTemperature = [ 6, 10, 15, 8, 3, 11, 4 ]
for ( var x = 0 ;
    x < autumnTemperature.length ;
    x++) {
        if (x == autumnTemperature[x]) { 
            alert ("I need a jacket"); 
        } else if (x > autumnTemperature[x]){
        alert ("time for a swim");
    } else if (x < autumnTemperature[x]) {
        alert ("let's drink hot chocolate")
    } else { "Autumn is here"};
    }
