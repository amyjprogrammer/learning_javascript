function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

bark("rover", 23);
bark("spot", 13);
bark("tristan", 15);
bark("Archimedes", 23);
bark("Tinkerbell", 5);

function doIt(param) {
    param = 2;
}

var test = 1;
doIt(test);
console.log(test);