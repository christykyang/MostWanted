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
      searchResults = searchByTraits(people);
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

//-------------------------------STEP 1 = SEARCH BY MULTIPLE TRAITS (Get search by traits from user)------------------------------------//
function getSearchByTraits(){
  let searchCriteria = promptFor("What did you want to search by? (id, firstName, lastName, gender, dob, weight, height, eyeColor, occupation, parents, currentSpouse", chars);

  //(STEP 2 = add traits to new array)
  let listOfSearchByTraits = searchCriteria.split(',');

  whatIsEachUniqueTrait(listOfSearchByTraits);

}
//------------------------------STEP 3 = what is each unique trait you are looking for??????--------------------------------------------//
function whatIsEachUniqueTrait(traits){
  let suppliedTraits;
  for (let trait in traits){
    if(traits[trait] === "id"){
      let id = promptFor("What is the id?", chars);
      suppliedTraits.push(id);
    }
    if(traits[trait] === "firstName"){
      let firstName = promptFor("What is firstName?", chars);
      suppliedTraits.push(firstName);
    }
    if(traits[trait] === "lastName"){
      let lastName = promptFor("What is the lastName?", chars);
      suppliedTraits.push(lastName);
    }
    if(traits[trait] === "gender"){
      let gender = promptFor("What is the gender?", chars);
      suppliedTraits.push(gender);
    }
    if(i === "dob"){
      let dob = promptFor("What is the dob?", chars);
      suppliedTraits.push(dob);
    }
    if(i === "height"){
      let height = promptFor("What is the height?", chars);
      suppliedTraits.push(height);
    }
    if(i === "weight"){
      let weight = promptFor("What is the weight?", chars);
      suppliedTraits.push(weight);
    }
    if(i === "eyeColor"){
      let eyeColor = promptFor("What is the eyeColor?", chars);
      suppliedTraits.push(eyeColor);
    }
    if(i === "occupation"){
      let occupation = promptFor("What is the occupation?", chars);
      suppliedTraits.push(occupation);
    }
    if(i === "parents"){
      let parents = promptFor("Who are the parents (by id)?", chars);
      suppliedTraits.push(parents);
    }
    if(i === "currentSpouse"){
      let currentSpouse = promptFor("What is the currentSpouse (by id)?", chars);
      suppliedTraits.push(currentSpouse);
    }
    return suppliedTraits;
  }
}

//------------------------------CHRISTY WORKING passing listOfSearchByTraits to be compared---------------------------------------------//
function searchByTraits(people){
  //get listOfSearchbyTraits
  getSearchByTraits();
  whatIsEachUniqueTrait()
  let foundPerson = people.filter(function(person){
    if(person.id === listOfSearchByTraits.id){
      return true;
    }
    if(person.firstName === listOfSearchByTraits.firstName){
      return true;
    }
    if(person.lastName === listOfSearchByTraits.lastName){
      return true;
    }
    if(person.gender === listOfSearchByTraits.gender){
      return true;
    }
    if(person.dob === listOfSearchByTraits.dob){
      return true;
    }
    if(person.height === listOfSearchByTraits.height){
      return true;
    }
    if(person.weight === listOfSearchByTraits.weight){
      return true;
    }
    if(person.eyeColor === listOfSearchByTraits.eyeColor){
      return true;
    }
    if(person.occupation === listOfSearchByTraits.occupation){
      return true;
    }
    if(person.parents === listOfSearchByTraits.parents){
      return true;
    }
    if(person.currentSpouse === listOfSearchByTraits.currentSpouse){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;
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
