var readlinesync = require ('readline-sync');
console.log('hello and welcome')
var userName = readlinesync.question('May I have your name?');
console.log('Hi'+ userName + '!');
const counties = ['Dublin','kerry','clare','Killkenny','Cork','Louth'];
function pickRandomCounty(){

const RandomIndex = Math.floor(Math.random()*

counties.length);

return counties[RandomIndex]









}
const randomlyselectedCounty = 
pickRandomCounty();
console.log('Randomly selected county:',randomlyselectedCounty)