$(document).ready(function(){

//Display Date
var currentDayText = moment().format("MMM Do YY");
$("#currentDay").text("City Name " + "(" + (currentDayText) +")");

$(".search").on("click", function(){
    var userInput = $("#searchCity").val().trim();

   var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=1fede5b00042eb37df138bc327a6d612";

    $.ajax({
        url: queryURL,
        method: "GET"
    //go to this url and get the info, then run the function//
    }).then(function (response){
        //console.log(response) use the response object elements to build out the info in html 

  //call function to fill descriptions
  displayStorage();

        //make a jquery element to display the value of the text element 
        var cityName = localStorage.getItem($("<#li>").val(response.name));
        var cityTemp = response.main.temp;
        var cityHumidity = response.main.humidity;
        var windSpeed = response.wind.speed;



        //Set "response values" key in localStorage
        localStorage.setItem("city", response.name);
        localStorage.setItem("temp", response.main.temp);
        localStorage.setItem("humidity", response.main.humidity);
        localStorage.setItem("wind", response.wind.speed);
        localStorage.setItem("current", moment().format("MMM Do YY"));
    })
})

function displayStorage() {
    var city = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    for (var i = 0; i < cities.length; i++) {
      var response = localStorage.getItem(city[i]);
      $("#" + city[i]).find("textarea").val(response);
    }
  }
});