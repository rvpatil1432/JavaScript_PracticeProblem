// Check if date is in between the given month.
const prompts = require("prompt-sync")();
let day = prompts("Enter day  : ");
let month = prompts("Enter month : ");
month.toLowerCase;
if ((month == "march" || month == "april" || month == "may" || month == "june") && (day >= 20 & day <= 31)) console.log(true);
else console.log(false);