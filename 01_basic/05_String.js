const name = "Deepak";
const repoCount = 5;

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and I have ${repoCount} repositories`);

const gameName = new String ("Deepak--Dsd");

console.log(gameName);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("s"));

const newGameName = gameName.substring(2,7);
console.log(newGameName);

const anotherString = gameName.slice(2,4);
console.log(anotherString);

const playerName = "   Deepak   ";
console.log(playerName.trim());
const url = "https://www.example.com/deepak%20singh";

console.log(url.replace('%20','_'));

console.log(url.includes('_dangi'));




