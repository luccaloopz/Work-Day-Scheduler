var dayOfYear = moment().format("dddd, MMM Do, YYYY")

$("#currentDay").text(dayOfYear);

var hourOfDay = moment().hour();

var container = $(".container");

timeCoverter();

function timeCoverter() {
    var timeArray = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00pm"]
    
    for (i = 0; i < timeArray.length; i++) {
        var rowDiv = $("<div>");
        container.append(rowDiv);
        rowDiv.addClass("row");
        var div1 = $("<div>");
        div1.text(timeArray[i]);
        rowDiv.append(div1);
        div1.addClass("col hour time-block");
        var textarea = $("<textarea>");
        rowDiv.append(textarea);
        textarea.addClass("col-md-10 description");
        var time = moment(timeArray[i], "LT").format("HH");
        if (time > hourOfDay) {
            textarea.addClass("future");
            console.log(time);
        } else if (time < hourOfDay){
            textarea.addClass("past");
            console.log(time);
        } else {
            textarea.addClass("present");
            console.log(time);
        }
        var saveButton = $("<button>");
        rowDiv.append(saveButton);
        saveButton.addClass("col saveBtn");
        var saveIcon = $("<i>");
        saveButton.append(saveIcon);
        saveIcon.addClass("fas fa-save");
    };
};

// we'll also need to add an event listener to the save buttons that runs a function which logs the textarea to localStorage once it's clicked.
    //to do this we'll start off with an empty array and every time the save button is clicked we log an object with two key-value pairs per object. The first pair being {hour: current hour}, and second pair being {text: whatever was typed into textarea}.