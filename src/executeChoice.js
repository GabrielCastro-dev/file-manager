import { fcRed, Reset } from './utils/ansiColors.js';
import listFiles from './choiceFunctions/listFiles.js';
import createFile from './choiceFunctions/createFile.js';
import displayMenu from './menu/displayMenu.js';

function excecuteChoice(choice, directory){
    switch (choice) {
        case 1:
            listFiles(directory);
            break;
        case 3:
            createFile(directory);
            break;
        case 9:
            displayMenu(directory);
            break;
        case 10:
            console.log(fcRed + 'Exiting the file manager...' + Reset);
            process.exit();
            break;
        default:
            console.log(fcRed + 'Please enter a valid number!' + Reset);
            break;
    }

}

export default excecuteChoice;
