import { readdirSync } from 'fs';
import { fcGreen, Reset } from '../utils/ansiColors.js';

function listFiles(directory){
    const files = readdirSync(directory);

    console.log(fcGreen + '\nFiles whithin this folder: \n' + Reset);

    files.forEach(file => {
        console.log(file);
    });

    console.log('');
}

export default listFiles;
