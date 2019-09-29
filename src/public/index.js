const remote = require('electron').remote;

let maximized = false;

//Check if any of the menu-buttons have been clicked
document.getElementById('close-btn').addEventListener('click',function(e){
    let win = remote.getCurrentWindow();
    win.close();
});
document.getElementById('min-btn').addEventListener('click', function(e){
    let win = remote.getCurrentWindow();
    win.minimize();
});