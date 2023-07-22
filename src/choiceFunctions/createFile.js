import { writeFileSync } from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function createFile(directory){
    const fileName = prompt('Enter a name for the file (with file extension): ');

    writeFileSync(
        directory + fileName,
        ''
    );
}

export default createFile;
