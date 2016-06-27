// Day Ten
// Javascript Switch Statement
// The switch statement can be thought of as a shorthand way to write condtional statements.
/* The switch statement takes an expression, this expression is then tested against each case statement value
with strict comparision. */
var bestConsole = "Xbox One"; 
// feel free to disagree! ;) 
switch (bestConsole) {
	case "PlayStation 4":
		// if a match is found, the code block associated with the case statment will run.
		// case statements are equivalent to the "if/ else if" of a condtional statement.
	  console.log("Ah, the PS4, great choice!.");
		break;
		// the break statement is used to break out of the switch (stop it executing) if a match is found.
  case "Xbox One":
	  console.log("The Xbox One, superb choice!.");
	  break;
	case "Nintendo Wii":
	  console.log("Ah... an active gamer, i see. Nice.");
		break;
	case "Nintendo 3DS":
	  console.log("Can't beat a good handheld!.");
		break;
	default:
	// when no match is found, if a default statement is supplied, this will run.
        // the default statement is equivalent to the "else" of a condtional statement.
	  console.log("That's no console i've ever heard of, but... cool!.");
}
// multi-case single code-block switch
// sometimes you will want the same code block to be run, if one of several different cases are met.
var bestGameCompany = "Bethesda Softworks";
switch (bestGameCompany) {
	// when this is the case, you can group the case statements together like so.
	case "Bethesda Softworks":
	case "Ubisoft":
	case "Bioware":
	case "Activision":
	case "Rockstar": 
	case "LucasArts":
  case "Capcom": 
	case "Nintendo":
	case "Valve":
	case "Konami":
	  console.log("A great company & a fine choice.");
		break;
	default:
	  console.log("Who?... i mean, awesome.");
}
