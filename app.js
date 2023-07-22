import displayMenu from './src/displayMenu.js';
import getUserChoice from './src/getUserChoice.js';
import excecuteChoice from './src/executeChoice.js';

function main(){
    let directory = './files';
    let runApp = true;

    displayMenu(directory);
    const choice = getUserChoice(directory);
}

main();
