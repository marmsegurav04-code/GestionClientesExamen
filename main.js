const { app, BrowserWindow } = require("electron");
const path = require("path");

function crearVentana() {
    const ventana = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    ventana.loadFile("index.html");
}

app.whenReady().then(crearVentana);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});