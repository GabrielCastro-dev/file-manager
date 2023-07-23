import { fcRed, Reset } from '../utils/ansiColors.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { existsSync } from 'fs';

function changeDirectory(directory){
    const userInput = prompt('Enter the destination: ');
    const newDirectory = directory.value + userInput + '/';
    const folderExists = existsSync(newDirectory);

    if(folderExists){
        directory.value =  newDirectory;
        console.log('')
    } else {
        console.log(fcRed + "This folder doesn't exists" + Reset);
    }
}

export default changeDirectory;
