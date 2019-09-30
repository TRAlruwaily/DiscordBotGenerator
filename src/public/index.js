const remote = require('electron').remote;  //used to close and minimize the window

let page = 0;   //Used to prevent btn-spam, which causes the app the be stuck in the middle

//Check if any of the menu-buttons have been clicked
document.getElementById('close-btn').addEventListener('click',function(e){
    let win = remote.getCurrentWindow();
    win.close();
});
document.getElementById('min-btn').addEventListener('click', function(e){
    let win = remote.getCurrentWindow();
    win.minimize();
});

//Check if any of the navbar-buttons have been clicked
document.getElementById('home-btn').addEventListener('click', function(e){
    if(page != 0){
        let elem = document.getElementById('home');
        let offset = 25;
        let elementPos = elem.getBoundingClientRect().top;
        let offsetPos = elementPos - offset;
        
        window.scrollTo({
            top: offsetPos,
            behavior: "smooth"
        });
        page = 0;
    }
    
});
document.getElementById('commands-btn').addEventListener('click', function(e){
    if(page != 1){
        let elem = document.getElementById('commands');
        let offset = 25;
        let elementPos = elem.getBoundingClientRect().top;
        let offsetPos = elementPos - offset;
        
        window.scrollTo({
            top: offsetPos,
            behavior: "smooth"
        });
        page = 1;
    }
});