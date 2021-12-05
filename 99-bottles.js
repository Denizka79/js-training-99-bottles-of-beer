var i = 99;

while (i >= 0) {
    if (i > 2) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        i = i - 1;
    } else if (i === 2) {
        console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.");
        i = i - 1;
    } else if (i === 1) {
        console.log("One bottle of beer on the wall, one bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        i = i - 1;
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        i = i - 1;
    }
}
