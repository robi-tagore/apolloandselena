var { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const { killPort } = require("./utils");

if (require("electron-squirrel-startup")) {
  app.quit();
}

async function createNewWindow(config, resource) {
  const mainWindow = new BrowserWindow(config);

  if (String(resource).includes("http")) {
    mainWindow.loadURL(resource);
  } else {
    mainWindow.loadFile(resource);
  }
  return mainWindow
}


var welcome;
app.on("ready",async () => {
  welcome = createNewWindow(
    {
      height: 600,
      width: 380,
      frame: false,
      transparent: true,
      show:false
    },
    __dirname + "/greet.html"
  );
  welcome.then((w) => w.show())
  

while (true) {
    try {
      var resStat = await fetch("http://localhost:3000");
      if (resStat.status == 200) {
        break;
      }
    } catch (error) {
    } finally {
      await new Promise((s, f) => {
        setTimeout(() => {
          s();
        }, 1000);
      });
    }
}
  
  welcome.then((d) => d.close())

  var appView = createNewWindow({
    height: screen.getPrimaryDisplay().size.height,
    width: screen.getPrimaryDisplay().size.width,
    autoHideMenuBar:true
  },'http://localhost:3000')
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
  console.log('all_closed');
});

