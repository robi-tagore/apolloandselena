var { exec } = require("child_process");

function killPort(port) {
  console.log(`>>> killing port @${port}`);
  console.log(`>>> @platform = ${process.platform}`);
  if (process.platform == "linux") {
    try {
      exec(`lsof -ti tcp:${port} | xargs kill`);
    } catch (error) {}
  } else if (process.platform == "win32") {
    console.log("will kill ************************");
  }
}
function out(pre, txt) {
  txt = String(txt);
  var cleaned = txt.replaceAll(" ", "").replace("\n", "");
  if (cleaned.length != 0) {
    console.log(`${pre} ${txt}`);
  }
}

module.exports = { killPort, out };
