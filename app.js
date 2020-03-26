"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType.toLowerCase()){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people.
   We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption.toLowerCase()){
    case "info":
    displayPerson(person)
    break;
    case "family":
    // TODO: get person's family
    displayFamily(person)
    break;
    case "descendants":
    // TODO: get person's descendants
    displayDescendants(person)
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByTraits(people){
  let searchCriteria = promptFor("What did you want to search by? (id, firstName, lastName, gender, dob, weight, height, eyeColor, occupation, parents, currentSpouse", chars);

  let searchReturn;

  //for loop??? nested switch case
  switch(searchCriteria){
    case "id":
    searchReturn = searchById(people);
    break;
    case "firstName":
    searchReturn = searchByFirstName(people);
    break;
    case "lastName":
    searchReturn = searchByLastName(people);
    break;
    case "gender":
    searchReturn - searchByGender(people);
    break;
    case "dob":
    searchReturn = searchByDob(people);
    break;
    case "weight":
    searchReturn = searchByWeight(people);
    break;
    case "height":
    searchReturn = searchByHeight(people);
    break;
    case "eyeColor":
    searchReturn = searchByEyeColor(people);
    break;
    case "occupation":
    searchReturn = searchByOccupation(people);
    break;
    case "parents":
    searchReturn = searchByParents(people);
    break;
    case "currentSpouse":
    searchReturn = searchBySpouse(people);
    break;
    default:
    return searchByTraits(people); // ask again
  }
}
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })[0]
  return foundPerson;
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "DOB: " + person.dob + "\n"; // here we will use the array.map function to turn dob to age
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  alert(personInfo);
}
function displayFamily(person){
let personFamilyInfo = 
alert(personFamilyInfo);
}

function displayDescendants(person){
let personDescendantsInfo = 
alert(personDescendantsInfo);
}



// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
