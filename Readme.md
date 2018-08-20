# Prerequisite steps to get start with react applications

## Steps to follow
* install nodejs
* install yarn
* install vscode

## Vscode Extentions
* Simple react Snippets
* Javascript Es6 code snippets
* Babel ES6/ES7
* Beautify
* Pettier
* Path intelissence
* HTML snippets
* HTML CSS support

## Vscode Custom Workplace settings
```json
{
    "editor.fontSize": 16,
    "editor.formatOnSave": true,
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "workbench.iconTheme": "material-icon-theme",
    "editor.minimap.enabled": false,
    "beautify.ignore": ["**/*.js",
      "**/*.jsx"
    ]
}
```
## Node Modules
* npm install -g babel-cli@6.24.1

## Initiate Project
* yarn init
* enter all default steps

### Autowatch jsx to js using babel
babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch

### To start lice-server 
live-server public

### Steps completed:
* Setting up dev environment
* Setting up local server
* Setting up babel
