import { fcBlue, Reset} from '../utils/ansiColors.js';

function displayMenu(){
    console.log(`${fcBlue}\nWelcome to the Interactive File Manager!\n${Reset}`);
    console.log(`${fcBlue}1.${Reset} List Files`);
    console.log(`${fcBlue}2.${Reset} Navigate to a Folder`);
    console.log(`${fcBlue}3.${Reset} Create a New File`);
    console.log(`${fcBlue}4.${Reset} Create a New Folder`);
    console.log(`${fcBlue}5.${Reset} Delete a File/Folder`);
    console.log(`${fcBlue}6.${Reset} Move a File/Folder`);
    console.log(`${fcBlue}7.${Reset} Rename a File/Folder`);
    console.log(`${fcBlue}8.${Reset} Search for a file`);
    console.log(`${fcBlue}9.${Reset} Clear the screen`);
    console.log(`${fcBlue}10.${Reset} Show menu again`);
    console.log(`${fcBlue}11.${Reset} Exit`);
}

export default displayMenu;
