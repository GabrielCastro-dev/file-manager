import { fcBlue, Reset} from '../utils/ansiColors.js';

function displayMenu(directory){
    console.log(`${fcBlue}\nWelcome to the Interactive File Manager!\n${Reset}`);
    console.log(`Current Directory: ${directory}\n`);
    console.log(`${fcBlue}1.${Reset} List Files`);
    console.log(`${fcBlue}2.${Reset} Navigate to a Folder`);
    console.log(`${fcBlue}3.${Reset} Create a New File`);
    console.log(`${fcBlue}4.${Reset} Create a New Folder`);
    console.log(`${fcBlue}5.${Reset} Delete a File/Folder`);
    console.log(`${fcBlue}6.${Reset} Move/Rename a File/Folder`);
    console.log(`${fcBlue}7.${Reset} Edit a Text File`);
    console.log(`${fcBlue}8.${Reset} Search Files`);
    console.log(`${fcBlue}9.${Reset} Show menu again`);
    console.log(`${fcBlue}10.${Reset} Exit\n`);
}

export default displayMenu;
