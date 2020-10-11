
//Code Mirrored from master folder in homework file. Struggling to understand these concepts so made an effort to reverse engineer the working file to create my own.


// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  // Function prompting user for password criteria and variables to store user inputs.
  function passwordCriteria(){
    var pswrdLength = parseInt(
        prompt('How many characters in password?')
    );
    var specialCharacters = confirm(
        'Click ok to include special characters'
    );
    var numericCharacters = confirm(
        'Click ok to include numeric characters'
    );
    var upperCharacters = confirm(
        'Click ok to include upper cased characters'
    );
    var lowerCharacters = confirm(
        'Click ok to include lower cased characters'
    );
    var criteriaOptions = {
        pswrdLength : pswrdLength,
        specialCharacters : specialCharacters,
        numericCharacters : numericCharacters,
        upperCharacters : upperCharacters,
        lowerCharacters : lowerCasedCharacters
    };
  }
//function to create a random element
  function createRandom(arr){
      let randomArr = Math.floor(Math.random()*arr.length)
  }
  
  //function to generate random password
  function createPassword(){
      var criteria = passwordCriteria();
      var result = [];
      var possibleCharacters = [];
      var guaranteedCharacters = [];

      if (criteria.specialCharacters){
          possibleChracters = possbleCharacters.concat(specialCharacters);
          guaranteedCharacters.push(createRandom(specialCharacters));
      }
      if (criteria.numericCharacters){
          possibleCharacters = possibleCharacters.concat(numericCharacters);
          guaranteedCharacters.push(createRandom(numericCharacters));
      }
      if (criteria.upperCharacters){
          possibleCharacters = possibleCharacters.concat(upperCharacters);
          guaranteedCharacters.push(createRandom(upperCharacters));
      }
      if (criteria.lowerCharacters){
          possibleCharacters = possibleCharacters.concat(lowerCharacters);
          guaranteedCharacters.push(createRandom(lowerCharacters));
      }
      for (i = 0; i < criteria.length; i++){
        var possibleCharacter = createRandom(possibleCharacters);
        result.push(possibleCharacters)
      }
      for (i = 0; i < guaranteedCharacters.length; i++){
        result[i] = guaranteedCharacters[i];
      }
      return result.join('');
  }


  var generateBtn = document.querySelector('#generate');

  function writePassword(){
      var password = createPassword();
      var passwordText = document.querySelector('#password');

      passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);