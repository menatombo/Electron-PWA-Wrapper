const path = require('path');
const electron = require('electron');
const AppTray = require('./app/app_tray');
const setAppMenu = require('./app/app_menu');
const MainWindow = require('./app/main_window');

const { app, Menu } = electron;

let mainWindow;
let tray;

app.on('ready', () => {
  // app.dock.hide();
  // mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  // set up icons
  const appIcon = process.platform === 'darwin' ? 'tray.png' : 'app.png';
  const trayIcon = 'tray.png';
  const appIconPath = path.join(__dirname, `./src/assets/${appIcon}`);
  const trayIconPath = path.join(__dirname, `./src/assets/${trayIcon}`);

  // load main page
  mainWindow = new MainWindow(appIconPath);
  // create menu
  setAppMenu(mainWindow);
  // create tray
  tray = new AppTray(trayIconPath, mainWindow);
});
