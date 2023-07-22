import { existsSync } from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function changeDirectory(directory){
    const newDirectory = prompt('Enter the destination: ');

    directory.value += newDirectory + '/';
}

export default changeDirectory;
