//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!
const input = require("readline-sync");
let string1 = 'Rutabagas';
let string2 = 'Chemistry';
let newString = "";
let userCodeCombo = "";

if (string1.length === string2.length){
for (let i = 0; i < string1.length; i++){
    newString = newString + string1[i] + string2[i]
};
  
console.log(newString)
} else {
  console.log("Error: Strings are different lengths.")
}

//Testing User Input//

let userCode1 = input.question("Enter the first code: ");
let userCode2 = input.question("Enter the second code: ");


if (userCode1.length === userCode2.length) {
  for (let i = 0; i < userCode1.length; i++){
    userCodeCombo = userCodeCombo + userCode1[i] + userCode2[i]
};  
  
console.log(userCodeCombo)

} else { 

while (userCode1.length !== userCode2.length){
  userCode2 = input.question(`Invalid entry. Second user code must contain ${userCode1.length} characters. Please try again: `)}

}




  


