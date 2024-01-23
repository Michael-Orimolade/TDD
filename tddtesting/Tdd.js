var readlinesync = require('readline-sync');
// This greets and welcomes the user
console.log('Hello and welcome');
// This asks the user their name
var userName = readlinesync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
// This shows the list of counties
const counties = ['Dublin', 'Kerry', 'Clare', 'Kilkenny', 'Cork', 'Louth'];



console.log('Available counties: ' + counties.join(', '));
var selectedCountyIndex = readlinesync.keyInSelect(counties, 'Please choose a county: ');
// This show selects the counties of what the user wants to pick
if (selectedCountyIndex !== -1) {
    const selectedCounty = counties[selectedCountyIndex];
    console.log('You selected:', selectedCounty);

    // This Displays weather conditions based on the selected county
    switch (selectedCounty) {
        case 'Dublin':
            console.log('Weather conditions in Dublin: Raining');
            break;
        case 'Kerry':
            console.log('Weather conditions in Kerry: Sunny');
            break;
        case 'Kilkenny':
            console.log('Weather conditions in Kilkenny: Windy');
            break;
        case 'Cork':
            console.log('Weather conditions in Cork: Clear');
            break;
        case 'Louth':
            console.log('Weather conditions in Louth: Windy');
            break;
        default:
            console.log('Unknown county selected');
            break;
    }
} else {
    console.log('You did not select any county. Exiting...');
}