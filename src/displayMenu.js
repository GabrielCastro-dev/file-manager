function displayMenu(directory){
    console.log(`\nWelcome to Interactive File Manager!\n`);
    console.log(`Current Directory: ${directory}\n`);
    console.log(`1. List Files`);
    console.log(`2. Navigate to a Folder`);
    console.log(`3. Create a New File`);
    console.log(`4. Create a New Folder`);
    console.log(`5. Delete a File/Folder`);
    console.log(`6. Move/Rename a File/Folder`);
    console.log(`7. Edit a Text File`);
    console.log(`8. Search Files`);
    console.log(`9. Show menu again`);
    console.log(`10. Exit\n`);
}

export default displayMenu;
