import fs from 'fs';
import os from 'os';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const fileManager = async () => {
    const homedir = os.homedir();
    let currentdir = homedir;

    const username = process.argv.slice(2).filter(s => s.includes('--username'))[0].split('=')[1];  
    console.log(`Welcome to the File Manager, ${username}!`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter text msg : => ',
    });

    rl.prompt();

    rl.on('line', (line)=>{
        switch(line.trim()){
            case 'exit':
                rl.close();
                break;
            default:
                console.log(line)
                rl.prompt();
                break;
        }
    }).on('close', ()=>{
        console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
    })



};

await fileManager();