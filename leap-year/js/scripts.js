//Back-end
var leapYear = function(year) {
  if (year % 4 === 0){
    return true;
  } else {
    return false;    
  }

}

//Front End
$(document).ready(function(){
  //Attach submit listener to form leap year
  $("form#leap-year").submit(function(event){
    //on submit asign values from form input called var year
    event.preventDefault();
    var year = parseInt($("input#year").val());
    //Call leap year function, pass the year var as an argument, assign the return values
    //to the variable result
    var result = leapYear(year);
    $("#result").text(result);
  })
});
