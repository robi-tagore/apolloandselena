module.exports = {
  packagerConfig: {
    deb: {},
    rpm: {},
    win32: {},
    zip: {},
  },
  makers: [
    
    {
      name: "@electron-forge/maker-zip",
      platforms: ["linux"],
    },
  ],
};
