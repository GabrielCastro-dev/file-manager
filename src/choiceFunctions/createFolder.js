import { existsSync, mkdirSync } from 'fs';
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { fcRed, fcGreen, Reset } from '../utils/ansiColors.js';

function createFolder(directory){
    const folderName = prompt('Enter a name for the folder: ');
    const folderExists = existsSync(directory.value + folderName);

    if(folderExists){
        console.log(fcRed + 'This folder already exists!' + Reset);
        return null
    }

    if(!folderExists || confirmation){
        mkdirSync(directory.value + folderName);
        console.log(fcGreen + 'Folder created successfully.' + Reset);
    }
}

export default createFolder;
