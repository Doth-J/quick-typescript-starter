#! /usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import {program,OptionValues} from "commander";

function createProject(name:string, options:OptionValues){
    const template = JSON.parse(fs.readFileSync(path.join(__dirname,'..','starter.json')).toString());
    console.group('Typescript Project Starter 📖')
    console.log('📃 .... Creating Project Module')
    template.package.name = name;
    template.package.keywords.push('ts-start');
    if(options.author) template.package.author = options.author;
    if(options.description) template.package.description = options.description;
    if(options.license) template.package.license = options.license;
    if(options.keywords) template.package.keywords.push(...options.keywords.split(','));
    console.log('🗃️ ... Creating Directories ')
    if(!fs.existsSync(path.join(process.cwd(),name))) fs.mkdirSync(path.join(process.cwd(),name));
    if(!fs.existsSync(path.join(process.cwd(),name,'src')))fs.mkdirSync(path.join(process.cwd(),name,'src'));
    console.log('📦 .. Writing package and tsconfig ')
    fs.writeFileSync(path.join(process.cwd(),name,'package.json'),JSON.stringify(template.package,null,4));
    fs.writeFileSync(path.join(process.cwd(),name,'tsconfig.json'),JSON.stringify(template.tsconfig,null,4));
    console.log('⚡ . Installing dependencies ')
    execSync(`cd ${path.join(process.cwd(),name)} && npm install`);
    console.log('📘 Happy TS Coding')
    console.groupEnd();
}

program.name('ts-start')
    .description('📘 Typescript Project Starter Setup 📘')
    .version(JSON.parse(fs.readFileSync(path.join(__dirname,'..','package.json')).toString()).version)
    .argument('[name]','project name','TypescriptStarter')
    .option('-a, --author <✍️>','setup project author')
    .option('-d, --description <📄>','setup project description')
    .option('-k, --keywords <🔑,🗝️>','setup project keywords, separator:","')
    .option('-l, --license <📜>','setup project license')
    .action((name,options)=>createProject(name,options))
    .showHelpAfterError()
    .showSuggestionAfterError()
    .parse()