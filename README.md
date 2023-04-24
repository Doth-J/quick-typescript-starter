# Typescript Project Starter :blue_book:
A simple typescript project starter command line tool.

## Installation :zap:
Globally install the cli tool using:
```console
npm install -g typescript-starter
```

## Generate Project :gear:
Once installed, open a terminal and enter the `ts-start` command to use the tool:
```console
>ts-start --help
Usage: ts-start [options] [name]

📘 Typescript Project Starter Setup 📘

Arguments:
  name                     project name (default: "TypescriptStarter")

Options:
  -V, --version            output the version number
  -a, --author <✍️>        setup project author
  -d, --description <📄>   setup project description
  -k, --keywords <🔑,🗝️>  setup project keywords, separator:","
  -l, --license <📜>       setup project license
  -h, --help               display help for command
```
### Tool Use Example
```console
> ts-start example -a project-author -d "test project description" -k example,test -l MIT
Typescript Project Starter 📖
  📃 .... Creating Project Module
  🗃️ ... Creating Directories
  📦 .. Writing package and tsconfig
  ⚡ . Installing dependencies
  📘 Happy TS Coding
```