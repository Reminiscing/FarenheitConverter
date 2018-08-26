let convert = document.getElementById('convert-btn');
let celsius = document.getElementById('input-field');
let tempToConvert = parseFloat(celsius.value);
let temperature = document.getElementById('temp');
let form = document.getElementById('form-group');
let temp = document.getElementById('temp');
let d = new Date();
let monthDisplay = document.getElementById('month');
let dateOfTheMonth = document.getElementById('current-date');
let dayOfTheWeek = document.getElementById('day');



// temp.style.display = 'none';
// monthDisplay.style.display = 'none';
// dayOfTheWeek.style.display = 'none';
// dateOfTheMonth.style.display = 'none';

//Display date 
document.addEventListener('DOMContentLoaded', getCurrentDate);

// Convert Temperature to Celsius
form.addEventListener('submit', function(e){
    convertToCelsius();
    
    console.log(d.getMonth());
    // Prevents page from reloading after submit
    e.preventDefault();
    
});


// Convert to Celsius function
function convertToCelsius(){
    let newTemp; 
      newTemp = (parseFloat(celsius.value * (9/5) + 32));   

      // Convert number to string to check length
      let stringNumber = newTemp.toString();
    
      // Check length and slice to 4th index if greater than 3 digits
      if(stringNumber.length >= 3){
        temperature.innerHTML = '<h2>' + stringNumber.slice(0, 4) + '℉ </h2>';
      }  else {
        temperature.innerHTML = '<h2>' + stringNumber + '℉ </h2>';
      }
   
      temp.style.display = 'block';

}






// Get current date and display it
function getCurrentDate() {
    let month = d.getMonth();
    let displayDay = d.getDay();
    let dateToDisplay = d.getDate();
    
    
    // Check for and set month
    switch(month) {
        case 0 : 
        monthDisplay.innerHTML = 'Jan';
        break;

        case 1 : 
        monthDisplay.innerHTML = 'Feb';
        break;

        case 2 : 
        monthDisplay.innerHTML = 'Mar';
        break;

        case 3 : 
        monthDisplay.innerHTML = 'Apr';
        break;

        case 4 : 
        monthDisplay.innerHTML = 'May';
        break;

        case 5 : 
        monthDisplay.innerHTML = 'Jun';
        break;

        case 6 : 
        monthDisplay.innerHTML = 'Jul';
        break;

        case 7 : 
        monthDisplay.innerHTML = 'Aug';
        break;

        case 8 : 
        monthDisplay.innerHTML = 'Sept';
        break;

        case 9 : 
        monthDisplay.innerHTML = 'Oct';
        break;

        case 10 : 
        monthDisplay.innerHTML = 'Nov';
        break;

        case 11 : 
        monthDisplay.innerHTML = 'Dec';
        break;

        default: console.log('Cannot get month');
    }
    monthDisplay.style.display = 'inline-block';

    

    switch(displayDay) {
        case 0 :
        dayOfTheWeek.innerHTML = 'Sunday';
        break;

        case 1 :
        dayOfTheWeek.innerHTML = 'Monday';
        break;

        case 2 :
        dayOfTheWeek.innerHTML = 'Tuesday';
        break;

        case 3 :
        dayOfTheWeek.innerHTML = 'Wednesday';
        break;

        case 4 :
        dayOfTheWeek.innerHTML = 'Thursday';
        break;

        case 5 :
        dayOfTheWeek.innerHTML = 'Friday';
        break;

        case 6 :
        dayOfTheWeek.innerHTML = 'Saturday';
        break;

        default : console.log('Cannot get dayOfTheWeek');
    }
    dayOfTheWeek.style.display = 'inline-block';
    // // Change display to day of the week
    


    dateOfTheMonth.innerHTML = ' ' + dateToDisplay;

}




