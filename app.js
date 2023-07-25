import displayMenu from './src/view/displayMenu.js';
import getUserChoice from './src/view/getUserChoice.js';

function main(){
    let directory = {
        value: './files/'
    }

    console.clear();
    displayMenu(directory);
    getUserChoice(directory);
}

main();
