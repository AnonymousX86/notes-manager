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
    ignore: [
      /\.idea/,
      /\.browserslistrc/,
      /\.eslintrc\.js/,
      /\.gitignore/,
      /.+\.config\.js/,
      /* File package.json is necessary */
      /.+(?<!package)\.json/,
      /.+\.md/,
    ],
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "NotesManager",
        setupExe: "Notes manager Setup.exe",
        /* Not available from git */
        iconUrl:
          "C:/JetBrains/WebStorm Projects/notes-manager/src/img/icon-1.ico",
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
