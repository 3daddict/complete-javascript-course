/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

let markValues = {
    mass: 30,
    height: 2.5
}

let johnValues = {
    mass: 25,
    height: 3
}

function whosBmiIsHigher(val1, val2){
    let markBmi = markValues.mass / Math.pow(markValues.height, 2);
    let johnBmi = johnValues.mass / Math.pow(johnValues.height, 2);

    if(markBmi > johnBmi){
        console.log("At " + markBmi + "kg, Mark has a higher Bmi than John at " + johnBmi + "kg");
    } else {
        console.log("At " + johnBmi + "kg, John has a higher Bmi than John at " + markBmi + "kg");
    }
}

whosBmiIsHigher(markValues, johnValues);