// Assignment Code
function generatePassword() {

  //Prompting for password criteria
  //Get password length
  var passLength = parseInt(prompt("Enter the length of the password between 8 and 128"));
  
  //Verifying password length is valid
  if (passLength > 128 || passLength < 8 || passLength === NaN)
  {
    return "Invalid Password length";
  }

  //Get which charcters types should be used
  var lowerCase = confirm("Use lower case letters?");
  var upperCase = confirm("Use upper case letters?");
  var numeric = confirm("Use numbers?");
  var special = confirm("Use special charcters letters?");

  //verifying at least one charcter type was selected
  if (!(lowerCase ||upperCase || numeric || special))
  {
    return "You must select at least one type of charcter to use.";
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=[]{}<>,.?/:|";
  var charList = "";

  //Adding charcters based on the criteria from user
  if (lowerCase)
  {
    charList = charList + lowercaseChars;
  }

  if (upperCase)
  {
    charList = charList + uppercaseChars;
  }
  
  if (numeric)
  {
    charList = charList + numericChars;
  }
  
  if (special)
  {
    charList = charList + specialChars;
  }

  //intializing variables
  var password = "";
  var random = 0;

  //generating random password
 while (passLength > password.length)
 {
  //generating random index
  random = Math.floor(Math.random() * charList.length);
  //using random index to select charcter from list
  password = password + charList[random];
 }

//returning output
return password;
}

//get references to the generate elements
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
