import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { existsSync, readFileSync } from 'fs';
import inputValidation from '../validations/inputValidation.js';
import { Reset, fcRed } from '../utils/ansiColors.js';

function getFileByName(directory){
    const fileName = prompt('Enter the name of the file you want to search (with file extension): ');

    // User's input validation
    const validatedinput = inputValidation(fileName);

    if(!validatedinput.isInputValid){
        console.log(validatedinput.message);
        return;
    }

    // Checks if file exists
    const fileExists = existsSync(directory.value + fileName);

    if(!fileExists){
        console.log(fcRed + "\nThis file doesn't exists!" + Reset);
        return;
    }

    const readFile = prompt('The file exists. Would you want to read it (y/n)? ');

    switch (readFile) {
        case 'y':
            const fileContent = readFileSync(directory.value + fileName, 'utf8');
            console.log('\n' + fileContent);
            break;
        case 'n':
            return;
            break;
        default:
            console.log(fcRed + 'Please, enter a valid value.' + Reset);
            break;
    }
}

export default getFileByName;
