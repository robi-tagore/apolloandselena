var { exec } = require("child_process");
const path = require("path");
const { out, killPort } = require("./src/utils");

console.log("************* starting *************");



killPort(3000);
killPort(13169);


var setAllowedOrigin;
if (process.platform == 'linux') {
  setAllowedOrigin = 'ALLOWED_ORIGIN=http://localhost:3000 '
} else if (process.platform == 'win32') {
  setAllowedOrigin = "set ALLOWED_ORIGIN=http://localhost:3000 ";
}

var electron_process = exec("npm run run_electron", { shell: true });
var selena_process = exec("npm run run_selena", {shell: true});
var apollo_process = exec(setAllowedOrigin + "npm run run_apollo", {shell: true});

function escapeNow() {
  console.log("************* escaping *************");
  process.kill(electron_process.pid);
  process.kill(apollo_process.pid);
  process.kill(selena_process.pid);
  killPort(3000);
  killPort(13169);
  process.exit();
}

electron_process.stdout.on("data", (d) => {
  out("electron >>> d >", d);
  if (String(d).includes("all_closed")) {
    escapeNow();
  }
});

electron_process.stderr.on("data", (d) => {
  out("electron >>> e >", d);
});

selena_process.stdout.on("data", (d) => {
  out("selena >>> d >", d);
  if (String(d).includes("Ready") && String(d).includes("s")) {
    out("selena >>>>>>>>>>>>> selena is all set!", "");
  }
});

selena_process.stderr.on("data", (d) => {
  out("selena >>> e >", d);
});

apollo_process.stdout.on("data", (d) => {
  out("apollo >>> d >", d);
  if (String(d).includes("waiting for requests")) {
    out("apollo >>>>>>>>>>>>> apollo is all set!", "");
  }
});

apollo_process.stderr.on("data", (d) => {
  out("apollo >>> e >", d);
});
