const { BrowserWindow } = require('electron').remote;
const path = require('path');

const firstButton = document.getElementById('AFD1');
const secondButton = document.getElementById('AFD2');

firstButton.addEventListener('click', (event) => {
    const unoafd = path.join('file://', __dirname, '/windows/afd1/ventanaAFD1.html');

    let window1 = new BrowserWindow({
        width: 690,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    window1.on('close', () => { window1 = null });
    window1.loadURL(unoafd);
    window1.show();
});

secondButton.addEventListener('click', (event) => {
    const dosafd = path.join('file://', __dirname, '/windows/afd2/ventanaAFD2.html');

    let window2 = new BrowserWindow({
        width: 690,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    window2.on('close', () => { window2 = null });
    window2.loadURL(dosafd);
    window2.show();
});