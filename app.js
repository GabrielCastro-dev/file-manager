import displayMenu from './src/menu/displayMenu.js';
import getUserChoice from './src/menu/getUserChoice.js';

function main(){
    let directory = {
        value: './files/'
    }

    console.clear();
    displayMenu(directory);
    getUserChoice(directory);
}

main();
