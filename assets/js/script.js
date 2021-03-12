// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()-"


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//when push button activate prompts
function generatePassword(){
    var userPasswordLength = passwordLength();
   

    //add user selections (lowercase) to validCharacters
    var validCharacters = "";
    
    var emptyPassword = "";

    if (upperCase()){
        validCharacters = validCharacters + uppercase
    }

    if (lowerCase()){
        validCharacters = validCharacters + lowercase
    }

    if (numericValues()){
        validCharacters = validCharacters + numbers
    }

    if (specialValues()){
        validCharacters = validCharacters + specialCharacters
    }

    
    for ( var i = 0; i < userPasswordLength; i++ ){
        var index = Math.floor(Math.random() * validCharacters.length);
        emptyPassword = emptyPassword +  validCharacters[index];
    } 
    
    return emptyPassword 
}

function passwordLength(){
    var userChoice = window.prompt("How many characters would you like in your password? (8 to 128 characters)");
    if (userChoice < 8){
        window.alert("You need at least 8 characters.")
        passwordLength();
    }
    if (userChoice > 128){
        window.alert("Your password must be fewer than 128 characters.")
        passwordLength();
    }

    return userChoice
    // return userChoice
}
//length of password prompt

function upperCase(){
    var userChoice =  window.confirm("Would you like uppercase letters in your password?")

    return userChoice
}

function lowerCase(){
    var userChoice =  window.confirm("Would you like lowercase letters in your password?")

    return userChoice
}

function numericValues(){
    var userChoice = window.confirm("Would you like numeric values in your password?")

    return userChoice
}

function specialValues(){
    var userChoice = window.confirm("Would you like special characters in your password?")

    return userChoice
}






