import { Reset, fcRed } from "../utils/ansiColors.js";

function inputValidation(input){
    if(input === '' || input === null || input === undefined){
        return {
            isInputValid: false,
            message: fcRed + 'Invalid input' + Reset
        }
    } else {
        return {
            isInputValid: true
        }
    }
}

export default inputValidation;
