import { existsSync, renameSync } from 'fs';
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import inputValidation from "../validations/inputValidation.js";
import { Reset, fcRed } from '../utils/ansiColors.js';

function renameResource(directory){
    // Get target name
    const targetResource = prompt('Enter the name of the resource you want to rename: ');

    // Input validation
    const validatedInput = inputValidation(targetResource);

    if(!validatedInput.isInputValid){
        console.log(validatedInput.message);
        return;
    }

    // Checks if resource exists
    const resourceExists = existsSync(directory.value + targetResource);

    if(!resourceExists){
        console.log(fcRed + "\nThis resource doesn't exists" + Reset);
        return;
    }

    // Get new name
    const newResourceName = prompt('Enter a new name: ');

    // Input validation
    const validatedNewName = inputValidation(newResourceName);

    if(!validatedNewName.isInputValid){
        console.log(validatedNewName.message);
        return;
    }

    renameSync(directory.value + targetResource, directory.value + newResourceName);
}

export default renameResource;
