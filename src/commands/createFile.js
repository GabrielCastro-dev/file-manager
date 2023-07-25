import { writeFileSync, existsSync } from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { fcRed, fcGreen, Reset } from '../utils/ansiColors.js';
import inputValidation from '../validations/inputValidation.js';

function createFile(directory){
    const fileName = prompt('Enter a name for the file (with file extension): ');

    // Input validation
    const validatedInput = inputValidation(fileName);

    if(!validatedInput.isInputValid){
        console.log(validatedInput.message);
        return
    }

    // File existence verification
    const fileExists = existsSync(directory.value + fileName);

    if(fileExists){
        var confirmation = prompt(fcRed + 'This file already exists, do you want to overwrite it (y/n)? ' + Reset);

        if(confirmation == 'y'){
            confirmation = true;
        } else {
            return null
        }
    }

    const hasContent = prompt('Would you like to write something inside of this file (y/n)? ')

    // Input validation
    const hasContentValidation = inputValidation(hasContent);

    if(!hasContentValidation.isInputValid){
        console.log(hasContentValidation.message);
        return
    }

    let fileContent = '';

    if(hasContent === 'y'){
        fileContent = prompt('Enter the content for this file: ');
    }

    // File creation
    if(!fileExists || confirmation){
        writeFileSync(
            directory.value + fileName,
            fileContent
        );

        console.log(fcGreen + '\nFile created successfully.' + Reset);
    }
}

export default createFile;
