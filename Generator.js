
function AskPasswordCriteria() {
  const passwordLength = prompt('Please enter the length of your password: ');
  const lowercase = prompt('Do you want lowercase letters in your password? (y/n): ');
  const uppercase = prompt('Do you want uppercase letters in your password? (y/n): ');
  const numbers = prompt('Do you want numbers in your password? (y/n): ');
  const symbols = prompt('Do you want symbols in your password? (y/n): ');
  const passwordCriteria = [passwordLength, lowercase, uppercase, numbers, symbols];
  return passwordCriteria;
}

function GeneratePassword(passwordCriteria) {
  // Define random for list of characters
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()';
  // Define variables to store password and criteria
  let password = '';
  const lowercaseBool = passwordCriteria[1];
  const uppercaseBool = passwordCriteria[2];
  const numbersBool = passwordCriteria[3];
  const symbolsBool = passwordCriteria[4];
  const passwordLength = passwordCriteria[0];
  // Define variable to store list of characters
  let listOfCharacters = '';
  // Loop through password criteria to determine what characters to use
  if (lowercaseBool === 'y') {
    listOfCharacters += lowercaseCharacters;
  }
  if (uppercaseBool === 'y') {
    listOfCharacters += uppercaseCharacters;
  }
  if (numbersBool === 'y') {
    listOfCharacters += numbers;
  }
  if (symbolsBool === 'y') {
    listOfCharacters += symbols;
  }
  // Loop through password length to generate password
  for (let i = 0; i < passwordLength; i += 1) {
    const random = Math.floor(Math.random() * listOfCharacters.length);
    password += listOfCharacters[random];
  }
  return password;
}


function PrintPassword(password) {
  console.log(`Your password is: ${password}`);
}

// Call the functions
const passwordCriteria = AskPasswordCriteria();
const password = GeneratePassword(passwordCriteria);
PrintPassword(password);
