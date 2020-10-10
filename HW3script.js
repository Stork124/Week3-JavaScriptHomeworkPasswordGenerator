



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

  
  var generateBtn = document.querySelector('#generate');

  generateBtn.addEventListener('click', passwordCriteria)