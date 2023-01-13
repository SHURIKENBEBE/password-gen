// Assignment code here
// prompt user for lenght of password - variable
// need variables storing our character sets
  // uppercase
  //lowercase 
  // numbers
  //special characters
// need variable to store user's choice for whether or not to use each character set
//IF user fails to select any characters, need to do something


function generatePassword(){
  // create function variables
  let lenInput = 0;
  let numLen = 0;
  let confirmChartypeLower = false;
  let confirmChartypeNum = false; 
  let confirmChartypeUpper = false; 
  let confirmChartypeSpecial = false;
  let charTypes;
  let password; 

  // will execute block until user enters valid input
  while (!numLen){
    // prompt user to enter password length
    let lenInput = window.prompt("Enter the desired length for your password");
    let numLen= parseInt (lenInput);
    
    // alert invalid number if input is not a numeric value
    if (isNaN(numLen)|| (numLen > 128 || numLen < 8)){
      alert("Please enter a numeric value beteen 8 and 128");
    }


    // window prompting char type selections once valid input for length has been inputted 
    
    const confirmChartypeUpper = window.confirm("Would you like to include upper case characters in your password?");
    const confirmChartypeLower = window.confirm("Would you like to include lower case characters in your password?");
    const confirmChartypeNum = window.confirm("Would you like to include numbers in your password?");
    const confirmChartypeSpecial = window.confirm("Would you like to include special characters in your password?");

    if (!confirmChartypeUpper && !confirmChartypeLower && !confirmChartypeNum && !confirmChartypeSpecial){
      alert("Please choose at least one character type");
    }
    

  //empty string to store password
  password='';
  charTypes=[];
  if (confirmChartypeUpper){
    charTypes = charTypes.concat(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z"]);
  } 
  if (confirmChartypeLower){
    charTypes = charTypes.concat(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
  } 
  if (confirmChartypeNum){
    charTypes = charTypes.concat(["0","1","2","3","4","5","6","7","8","9"]);
  } 
  if (confirmChartypeSpecial){
    charTypes = charTypes.concat(["!","@","#","$","%","^","&","*","-","+","?"]);
  }
  
  for (let i=0; i < numLen; i++){
    password += charTypes[Math.floor(Math.random()*charTypes.length)];


  console.log(password);
  return password;
    
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
