import { writeFileSync, existsSync } from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import getFileByName from '../utils/getFileByName.js';

function createFile(directory){
    const fileName = prompt('Enter a name for the file (with file extension): ');
    const fileExists = existsSync(directory + fileName);

    if(fileExists){
        var confirmation = prompt('This file already exists, do you want to overwrite it (y/n)? ');

        if(confirmation == 'y'){
            confirmation = true;
        } else {
            return null
        }
    }

    if(!fileExists || confirmation){
        writeFileSync(
            directory + fileName,
            ''
        );
    }
}

export default createFile;
