const passwordBox = document.getElementById('passwordBox')

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeSymbol,
  includeNumber,
) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbercaseChars = "0123456789";
    const symbolcaseChars = "!@#$%&*_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumber ? numbercaseChars : "";
    allowedChars += includeSymbol ? symbolcaseChars : "";

    if(length <= 0){
        return `(password length must be at least 5)`;
    }
    if(allowedChars.length === 0){
        return `(At least 5 set of chracter needs to be selected )`
    }

    for(let i=0; i<length; i++){
        const randomIndex =Math.floor( Math.random() * allowedChars.length);
    password += allowedChars[randomIndex] 
    }
    return  passwordBox.textContent = password;
}

const passwordlength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSymbol = true;
const includeNumber = true;

const password = generatePassword(
  passwordlength,
  includeLowerCase,
  includeUpperCase,
  includeNumber,
  includeSymbol
);


// console.log(`Generated password: ${password}`);
