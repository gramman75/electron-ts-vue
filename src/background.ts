'use strict'

import { Menu, dialog, app, protocol, BrowserWindow, ipcMain, IpcMessageEvent, shell } from 'electron'
import * as path from 'path'
import { format as formatUrl } from 'url'
// const isOnline = require('is-online')
// import {isOnline} from 'is-onlne'

import {MenuService } from './common/menu'

// const isOnline = require('is-online')

import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
if (isDevelopment) {
  // Don't load any native (external) modules until the following line is run:
  require('module').globalPaths.push(process.env.NODE_MODULES_PATH)
}

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: any

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })
function createMainWindow () {
  const window = new BrowserWindow({webPreferences : {webSecurity: false}})

  if (isDevelopment) {
    // Load the url of the dev server if in development mode
    window.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) window.webContents.openDevTools()
  } else {
    createProtocol('app')
    //   Load the index.html when not in development
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      })
    )
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

let m = new MenuService()

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools()
  }

  const menu = Menu.buildFromTemplate(m.template)
  Menu.setApplicationMenu(menu)
  mainWindow = createMainWindow()
})

let checkIsOnlineInterval: NodeJS.Timer 
let currentOnlineStatus  = {}

function checkIsOnline() {
  // isOnline().then( (online:any) => {
  //   console.log('online? ' + online)
  //   mainWindow.webContents.send('update-online-status', {online: online})
  //   if (currentOnlineStatus != online){
  //     if (process.platform === 'darwin' ){
  //       app.dock.bounce('informational')
  //     }
  //   }
  //   currentOnlineStatus = online
  // })
}

function startCheckingOnlineStatus(){
  checkIsOnlineInterval = setInterval(checkIsOnline, 10000)
}

ipcMain.on('check-online-status', checkIsOnline)

ipcMain.on('warn', (event: Event, arg: string) => {
  dialog.showMessageBox({
    title: 'Warning Message',
    message: arg,
    detail: 'message detail',
    buttons: ['Save', 'Don\'t Save', 'Cancel'],
    defaultId: 0,
  })
})
  