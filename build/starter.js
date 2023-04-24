#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const commander_1 = require("commander");
function createProject(name, options) {
    const template = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'starter.json')).toString());
    console.group('Typescript Project Starter 📖');
    console.log('📃 .... Creating Project Module');
    template.package.name = name;
    template.package.keywords.push('ts-start');
    if (options.author)
        template.package.author = options.author;
    if (options.description)
        template.package.description = options.description;
    if (options.license)
        template.package.license = options.license;
    if (options.keywords)
        template.package.keywords.push(...options.keywords.split(','));
    console.log('🗃️ ... Creating Directories ');
    if (!fs_1.default.existsSync(path_1.default.join(process.cwd(), name)))
        fs_1.default.mkdirSync(path_1.default.join(process.cwd(), name));
    if (!fs_1.default.existsSync(path_1.default.join(process.cwd(), name, 'src')))
        fs_1.default.mkdirSync(path_1.default.join(process.cwd(), name, 'src'));
    console.log('📦 .. Writing package and tsconfig ');
    fs_1.default.writeFileSync(path_1.default.join(process.cwd(), name, 'package.json'), JSON.stringify(template.package, null, 4));
    fs_1.default.writeFileSync(path_1.default.join(process.cwd(), name, 'tsconfig.json'), JSON.stringify(template.tsconfig, null, 4));
    console.log('⚡ . Installing dependencies ');
    (0, child_process_1.execSync)(`cd ${path_1.default.join(process.cwd(), name)} && npm install`);
    console.log('📘 Happy TS Coding');
    console.groupEnd();
}
commander_1.program.name('ts-start')
    .description('📘 Typescript Project Starter Setup 📘')
    .version(JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'package.json')).toString()).version)
    .argument('[name]', 'project name', 'TypescriptStarter')
    .option('-a, --author <✍️>', 'setup project author')
    .option('-d, --description <📄>', 'setup project description')
    .option('-k, --keywords <🔑,🗝️>', 'setup project keywords, separator:","')
    .option('-l, --license <📜>', 'setup project license')
    .action((name, options) => createProject(name, options))
    .showHelpAfterError()
    .showSuggestionAfterError()
    .parse();
