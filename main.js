const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 4000,
    height:1300,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    fullscreen: false
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.resolve(
        __dirname,
        "dist",
        "coffe",
        "browser",
        "index.html"
      ),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.show();
  });

  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
