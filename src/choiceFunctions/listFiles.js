import { readdirSync } from 'fs';
import {
    Reset,
    fcBlue,
    fcCyan,
    fcYellow,
    fcRed
} from '../utils/ansiColors.js';

function listFiles(directory){
    const files = readdirSync(directory);

    console.log(fcBlue + '\nContent whithin this folder: \n' + Reset);

    files.forEach(file => {
        const isFile = file.includes('.');

        if(isFile){
            const separateByDot =  file.split('.');
            const addANSIColors = (word) => {
                if (word === 'js') return fcYellow + word + Reset;
                if (word === 'rb') return fcRed + word + Reset;
                if (word === 'py') return fcBlue + word + Reset;
                return word; // Return the word unchanged if no color is specified
            };

              const fileName = separateByDot.map(addANSIColors).join('.');
              console.log('File: ' + fileName);
        } else {
            console.log('Folder: ' + fcCyan + file + Reset);
        }

    });

    console.log('');
}

export default listFiles;
