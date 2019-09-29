//Electron
const { app, BrowserWindow} = require('electron');

//Discord
const Discord = require('discord.js');
const client = new Discord.Client();    //Create the interface between 'this' and discord.

//Config file
const config = require('../config.json');

/**
 * ElectronJS functions
 * 
 * 
 */
let win; //Hold the window from electron

let windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
};

function createWindow(){
    win = new BrowserWindow(windowOptions);
    win.loadFile('./public/index.html');
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
  
  app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});


/**
 * Discord.JS functions
 * 
 * 
 */

client.on('ready',()=>{
    console.log(`Bot up and running!`);
});

client.login(config.token);