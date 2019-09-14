var express = require("express");
var app = express();
const {execSync} = require('child_process');

function minecraft() {
  execSync('"C:/Program Files (x86)/Minecraft/MinecraftLauncher.exe"'); 
}

app.get("/", (req, res, next) => {
  minecraft();
 });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});