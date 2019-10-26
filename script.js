

//.val versus .text//
//var userText = $("#userinput").text().trim();

$("#search").on("click", function(){
    var userInput = $("#cityName").val().trim();
    console.log(userInput);
   // console.log(userText);

   var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=1fede5b00042eb37df138bc327a6d612";

$.ajax({
    url: queryURL,
    method: "GET"
//go to this url and get the info, then run the function//
}).then(function (response){
//console.log(response) use the response object elements to build out the info in html 
console.log(response);
console.log(response.main.temp); 
//make a jquery element to display the value of the text element 
})
})