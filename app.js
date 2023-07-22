import displayMenu from './src/menu/displayMenu.js';
import getUserChoice from './src/getUserChoice.js';

function main(){
    let directory = './files';

    displayMenu(directory);
    getUserChoice(directory);
}

main();
