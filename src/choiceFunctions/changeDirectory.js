import { existsSync } from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function changeDirectory(directory){
    directory = prompt('Enter the destination: ');

    return directory;
}

export default changeDirectory;
