import { fcRed, Reset } from '../utils/ansiColors.js';
import listFiles from './listFiles.js';
import createFile from './createFile.js';
import createFolder from './createFolder.js';
import displayMenu from '../menu/displayMenu.js';
import changeDirectory from './changeDirectory.js';
import deleteResource from './deleteResource.js';
import getFileByName from './getFileByName.js';

function excecuteChoice(choice, directory){
    switch (choice) {
        case 1:
            listFiles(directory);
            break;
        case 2:
            changeDirectory(directory);
            break;
        case 3:
            createFile(directory);
            break;
        case 4:
            createFolder(directory);
            break;
        case 5:
            deleteResource(directory);
            break;
        case 9:
            getFileByName(directory);
            break;
        case 10:
            console.clear();
            break;
        case 11:
            displayMenu(directory);
            break;
        case 12:
            console.log(fcRed + 'Exiting the file manager...' + Reset);
            process.exit();
            break;
        default:
            console.log(fcRed + 'Please enter a valid number!' + Reset);
            break;
    }

}

export default excecuteChoice;
