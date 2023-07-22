import { fcRed, Reset } from './utils/ansiColors.js';
import listFiles from './choices/listFiles.js';
import displayMenu from './displayMenu.js';

function excecuteChoice(choice, directory){
    switch (choice) {
        case 1:
            listFiles(directory);
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
