import { readFileSync } from 'fs';

function getFileByName(name){
    const file = readFileSync(name, 'utf8');
    return file;
}

export default getFileByName;
