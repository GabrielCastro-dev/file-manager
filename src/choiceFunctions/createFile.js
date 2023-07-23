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

    // File creation
    if(!fileExists || confirmation){
        writeFileSync(
            directory.value + fileName,
            ''
        );

        console.log(fcGreen + 'File created successfully.' + Reset);
    }
}

export default createFile;
