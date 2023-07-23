import excecuteChoice from '../choiceFunctions/executeChoice.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function getUserChoice(directory){
    while (true) {
        const choice = prompt('Please choose an option (1-12): ');
        const parsedChoice = parseInt(choice);

        excecuteChoice(parsedChoice, directory);
    }
}

export default getUserChoice;
