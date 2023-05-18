const currentDate = dayjs().format('dddd') + " " + dayjs().format("Do MMM YYYY");
const currentHour = dayjs().format('HH:mm');

// hour in text var 
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var hour = dayjs().hour();
var hourString = $("#hour").text().split(" ");
var userInput; 
var hourSpan;



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // listener for click events on the save button. 
   $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  // TODO: Add code to apply the past, present, or future class to each time block
    function background () {
 
  $("textarea").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);


    if (hour > timeTest) {
        $(this).addClass("past");
    } else if (hour < timeTest) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});

    }
 
  //Code to display the current date in the header of the page.
  var interval = setInterval(function(){
    var timeNow = dayjs();
    $('#currentDay').html(timeNow.format('YYYY MMMM DD') + ''
                          + timeNow.format('dddd')
                          .substring(0,3).toUpperCase());
   $('#currentDay').html(currentDate + " " + timeNow.format('HH:mm:ss A'))
  }, 100);

  $(document).ready(function(){
    initPage()
    background()
  }); 
  //Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements
  function initPage() {


    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("#hour-9"));
    nineAm.val(init9);
  
  
    var init10 = JSON.parse(localStorage.getItem("#hour-10"))
    tenAm.val(init10);
   
    var init11 = JSON.parse(localStorage.getItem("#hour-11"))
    elevenAm.val(init11);
   
    var init12 = JSON.parse(localStorage.getItem("#hour-12"))
    twelvePm.val(init12);
   
    var init1 = JSON.parse(localStorage.getItem("#hour-1"))
    onePm.val(init1);
   
    var init2 = JSON.parse(localStorage.getItem("#hour-2"))
    twoPm.val(init2);
   
    var init3 = JSON.parse(localStorage.getItem("#hour-3"))
    threePm.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("#hour-4"))
    fourPm.val(init4);
   
    var init5 = JSON.parse(localStorage.getItem("#hour-5"))
    fivePm.val(init5);
  }
  
  
  
});
