import { fcRed, Reset } from '../utils/ansiColors.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { existsSync } from 'fs';
import inputValidation from '../validations/inputValidation.js';

function changeDirectory(directory){
    const userInput = prompt('Enter the destination: ');

    // User's input validation
    const validatedInput = inputValidation(userInput);

    if(!validatedInput.isInputValid){
        console.log(validatedInput.message);
        return;
    }

    // Directory existence verification
    const newDirectory = directory.value + userInput + '/';
    const folderExists = existsSync(newDirectory);

    if(!folderExists){
        console.log(`\n${fcRed}This folder doesn't exists! ${Reset}`);
        return;
    }

    directory.value =  newDirectory;
    console.log('');
}

export default changeDirectory;
