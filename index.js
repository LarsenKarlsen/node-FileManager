import fs, { cp } from 'fs';
import os from 'os';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'url';

import up from './commands/up.js';
import ls from './commands/ls.js';
import cd from './commands/cd.js';
import cat from './commands/cat.js';
import add from './commands/add.js';
import rename from './commands/rn.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const fileManager = async () => {
    const homedir = os.homedir();
    let currentdir = path.join(homedir, 'rsSchool/node/node-FileManager/file-demo');

    const username = process.argv.slice(2).filter(s => s.includes('--username'))[0].split('=')[1];  
    console.log(`Welcome to the File Manager, ${username}!`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: `You are currently in ${currentdir}\nEnter command : => `,
    });

    rl.prompt();

    rl.on('line', async (line)=>{
        line = line.trim()
        switch(true){
            case line === 'up':
                currentdir = up(homedir, currentdir);
                rl.setPrompt(`You are currently in ${currentdir}\nEnter command : => `);
                rl.prompt();
                break;
            case line === 'ls':
                await ls(currentdir);
                rl.prompt()
                break;
            case line.includes('cd '):
                currentdir = await cd(line.split(' ')[1], currentdir);
                rl.setPrompt(`You are currently in ${currentdir}\nEnter command : => `);
                rl.prompt();
                break;
            case line.includes('cat '):
                await cat(line.split(' ')[1], currentdir);
                rl.prompt();
                break;
            case line.includes('add '):
                await add(line.split(' ')[1], currentdir);
                rl.prompt();
                break;
            case line.includes('rn '):
                rename(line.split(' ')[1], currentdir, line.split(' ')[2]);
                rl.prompt();
                break;
            case line === '.exit':
                rl.close();
                break;
            default:
                console.log('DEFAULT OUTPUT')
                console.log(line);
                rl.prompt();
                break;
        }
    }).on('close', ()=>{
        console.log(`\nThank you for using File Manager, ${username}, goodbye!`)
    })



};

await fileManager();