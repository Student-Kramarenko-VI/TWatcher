const { contextBridge, ipcRenderer } = require('electron');

// Expose selected APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  getVideoSources: () => {
    return new Promise((resolve, reject) => {
      ipcRenderer.once('videoSources', (event, inputSources) => {
        resolve(inputSources);
      });

      ipcRenderer.send('getVideoSources');
    });
  }
});
