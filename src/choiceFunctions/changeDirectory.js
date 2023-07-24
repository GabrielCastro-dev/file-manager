import { fcRed, Reset } from '../utils/ansiColors.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { existsSync } from 'fs';
import inputValidation from '../validations/inputValidation.js';

function changeDirectory(directory){
    const isSubfolder = prompt('The directory you want to navigate to is a subfolder (y/n)? ');

    // User's isSubfolder input validation
    const validatedSubfolderInput = inputValidation(isSubfolder);

    if(!validatedSubfolderInput.isInputValid){
        console.log(validatedSubfolderInput.message);
        return;
    }

    const userInput = prompt('Enter the destination: ');

    // User's destination input validation
    const validatedInput = inputValidation(userInput);

    if(!validatedInput.isInputValid){
        console.log(validatedInput.message);
        return;
    }

    // Checks if the directory is a subfolder
    switch (isSubfolder) {
        case 'y':
            // Directory existence verification
            const newDirectory = directory.value + userInput + '/';
            const folderExists = existsSync(newDirectory);

            if(!folderExists){
                console.log(`\n${fcRed}This folder doesn't exists! ${Reset}`);
                return;
            }

            // Sets new directory 
            directory.value =  newDirectory;
            console.log('');
            break;
        case 'n':
            directory.value = userInput + '/';
            console.log('');
            break;
        default:
            console.log(fcRed + 'Please enter a valid value.' + Reset);
            break;
    }
}

export default changeDirectory;
