import { existsSync, rmdirSync, unlinkSync } from 'fs';
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import inputValidation from '../validations/inputValidation.js';
import { Reset, fcRed } from '../utils/ansiColors.js';

function deleteResource(directory){
    const resourceName = prompt('Enter the name of the file/folder you want to delete: ');

    // User's input validation
    const validatedInput = inputValidation(resourceName);

    if(!validatedInput.isInputValid){
        console.log(validatedInput.message);
        return;
    }

    // Check if resource exists
    const resourceExists = existsSync(directory.value + resourceName);

    if(!resourceExists){
        console.log(`\n${fcRed}This file/folder doesn't exists! ${Reset}`);
        return;
    }

    // unlinkSync(directory.value + resourceName);
    rmdirSync(directory.value + resourceName);
}

export default deleteResource;
