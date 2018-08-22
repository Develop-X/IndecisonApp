# Prerequisite steps to get start with react applications

## Steps to follow

- install nodejs [MoreInfo](https://nodejs.org/en/)
- install yarn [MoreInfo](https://yarnpkg.com/en/)
- install vscode [MoreInfo](https://code.visualstudio.com/)

## Vscode Extentions

- Simple react Snippets
- Javascript Es6 code snippets
- Babel ES6/ES7
- Beautify
- Pettier
- Path intelissence
- HTML snippets
- HTML CSS support

## Vscode Custom Workplace settings

```json
{
  "editor.fontSize": 16,
  "editor.formatOnSave": true,
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
  "workbench.iconTheme": "material-icon-theme",
  "editor.minimap.enabled": false,
  "beautify.ignore": ["**/*.js", "**/*.jsx"]
}
```

## Node Modules

- npm install -g babel-cli@6.24.1

#``# Initiate Project

- yarn init
- enter all default steps

### Autowatch jsx to js using babel

babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch [MoreInfo](https://babeljs.io/setup#installation)

### To start lice-server

live-server public --port=8082 [MoreInfo](http://tapiov.net/live-server/)

### Steps completed:

- Setting up dev environment
- Setting up local server
- Setting up babel
- Started with JSX logical operator & Ternary Operator and conditional operator
- Arrow functions and map
- React rendering
