var dayOfYear = moment().format("dddd, MMM Do, YYYY")

$("#currentDay").text(dayOfYear);

console.log($("#time-block").textContent);

function hourOfDay() { //we'll probably need a setInterval() to run this function every hour (not sure if this the correct way to do this)
    var hourOfDay = moment().hour();
    //if the hour on the planner is < hourOfDay var => how do you conver the text content of the time to an actual number to compare to the hourOfDay variable?
        //setAttribute("class", "past")
    //if the hour on the planner is = hourOfDay var
        //setAttribute("class", "present")
    //if the hour on the planner is > hourOfDay var
        //setAttribute("class", "future")    
}

// we'll also need to add an event listener to the save buttons that runs a function which logs the textarea to localStorage once it's clicked.
    //to do this we'll start off with an empty array and every time the save button is clicked we log an object with two key-value pairs per object. The first pair being {hour: current hour}, and second pair being {text: whatever was typed into textarea}.