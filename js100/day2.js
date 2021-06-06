console.log("%c Welcome Roli, =D", "Color: Pink")

//Defining First Class Functions for morning routines for Mon-Fri
//Mon => run, liftweights
//Tues => run, swim
//Wed => run, run
//Thurs => run, liftweights
//Fri => run, swim

//Define func for the different activities
let runFiveMiles = () => console.log("Go run 5 miles")
let muscleWorkOut = () => console.log("Pump muscles at the gym")
let swimForLaps = () => console.log("Swim for 1 hour")

//Define func for each day to console log the schedule for each day
// Since each day has running first then define one function that will
//Contain running and some other activity

function exerciseRoutine(postActivity) {
    runFiveMiles();
    postActivity;
    
     
}

function monday(){
    exerciseRoutine(runFiveMiles())
}

function tuesday(){
    exerciseRoutine(swimForLaps())
}

function wednesday(){
    exerciseRoutine(runFiveMiles())
}

function thursday(){
    exerciseRoutine(muscleWorkOut())
}

function friday(){
    exerciseRoutine(swimForLaps())
}

//Monday()
//Tuesday()
//Wednesday()
//Thursday()
friday()
