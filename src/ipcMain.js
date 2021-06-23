'use strict'

import { app, ipcMain as bus, screen } from 'electron'
import fs from 'fs'

const appDir = app.getPath('userData');
const configFile = appDir + '\\config.json';
const hostFile = 'C:\\Windows\\System32\\drivers\\etc\\hosts'
console.log(configFile);
console.log(hostFile);
// Check if config file exist
if (!fs.existsSync(configFile)) {
  const defaultConfig = {
    switch: {
      default: {
        enabled: true,
        entries: [
          { ip: "127.0.0.1", domains: ["localhost"] }
        ]
      }
    },
    settings: {
      transparency: 0.1
    }
  }

  fs.writeFileSync(configFile, JSON.stringify(defaultConfig, null, "\t"))
}

// Waits for get config request from Renderer
bus.on('get-config-from-fs', (e, msg) => {

  // Read config from FS
  try {
    // Read file
    const data = fs.readFileSync(configFile, 'utf8')

    // Respond
    e.reply('send-config-from-fs', JSON.parse(data));
  } catch (err) {
    console.error(err)
  }

});

// This is what updates both the host file and config file
bus.on('update-fs', (e, msg) => {
  msg = JSON.parse(msg);
  let hostData = '';
  for (var key in msg.switch) {
    if (msg.switch[key].enabled == true) {
      hostData = hostData + '\n#' + key + '\n';
      if (msg.switch[key].entries.length > 0) {
        msg.switch[key].entries.forEach(entry => {
          let domains = entry.domains.join(' ')
          hostData = hostData + entry.ip + ' ' + domains + '\n';
        });
      }
    }
  }
  fs.writeFileSync(configFile, JSON.stringify(msg, null, "\t"));
  fs.writeFileSync(hostFile, hostData);
});

// Provides the screensize to the renderer
bus.on('getScreenSize', (e, msg) => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  e.returnValue = { width, height };
})