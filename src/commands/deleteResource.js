import { existsSync, rmdirSync, unlinkSync } from 'fs';
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import inputValidation from '../validations/inputValidation.js';
import { Reset, fcRed } from '../utils/ansiColors.js';

function deleteResource(directory){
    const resourceType = prompt('You want to delete a file or folder (file/folder): ');

    // Resource type validation
    const validatedResourceType = inputValidation(resourceType);

    if(!validatedResourceType.isInputValid){
        console.log(validatedResourceType.message);
        return;
    }

    const resourceName = prompt('Enter the name of the file/folder you want to delete: ');

    // Resource name validation
    const validatedResourceName = inputValidation(resourceName);

    if(!validatedResourceName.isInputValid){
        console.log(validatedResourceName.message);
        return;
    }

    // Check if resource exists
    const resourceExists = existsSync(directory.value + resourceName);

    if(!resourceExists){
        console.log(`\n${fcRed}This resource doesn't exists! ${Reset}`);
        return;
    }

    // Check if resource is a file or folder and then deletes it
    switch (resourceType) {
        case 'file':
            unlinkSync(directory.value + resourceName);
            break;
        case 'folder':
            rmdirSync(
                directory.value + resourceName,
                { recursive: true }
            );
            break;
        default:
            console.log(fcRed + '\nPlease, enter a valid argument.\n' + Reset);
            break;
    }
}

export default deleteResource;
