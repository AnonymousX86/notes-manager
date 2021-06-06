module.exports = {
  packagerConfig: {
    name: "Notes manager",
    /* Not available from git */
    icon: "./src/img/icon-1.ico",
    asar: false,
    executableName: "Notes manager",
    appCopyright: "Open Source GNU GPL v3.0",
    win32metadata: {
      CompanyName: "Jakub Suchenek",
      FileDescription: "Simple notes manager",
      InternalName: "notes-manager",
      OriginalFilename: "Notes manager.exe",
      ProductName: "Notes manager",
    },
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "Notes manager",
        setupExe: "Notes manager Setup",
        /* Not available from git */
        iconUrl: "./src/img/icon-1.ico",
        setupMsi: "Notes manager Setup",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
