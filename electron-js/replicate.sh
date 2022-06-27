[recreate]
npm init
npm install --save-dev electron
npm install --save-dev electron-packager
# npm install --save-dev @electron-forge/cli
# npm exec --package=@electron-forge/cli -c "electron-forge import"

[run]
npm start

[build]
# npx or npm exec
# npx electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...] 
# can use --all

npx electron-packager . app