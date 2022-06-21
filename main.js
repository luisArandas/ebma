

// luis arandas 21-07-2022
// trying an electron with flask template

const { app, BrowserWindow, ipcMain, Notification } = require("electron");


function createWindow () {
    const win = new BrowserWindow({
        title: "",
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadFile("index.html")
    // path.join(__dirname, "/index.html")
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});