import { readdirSync } from 'fs';
import { fcGreen, Reset } from '../utils/ansiColors.js';

function listFiles(directory){
    const files = readdirSync(directory);

    console.log(fcGreen + '\nFiles in this folder: \n' + Reset);

    files.forEach(file => {
        console.log(file);
    });
}

export default listFiles;
