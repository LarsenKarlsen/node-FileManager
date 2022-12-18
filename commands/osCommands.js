import os from 'os';


const osCommands = async (command) => {
    switch(true) {
        case command === '--EOL':
            console.log(JSON.stringify(os.EOL))
            break;
        case command === '--cpus':
            const cpusInfo = os.cpus();
            cpusInfo.forEach((cpu, index) =>{
                console.log('Core', index+1,cpu.model.trim(), cpu.speed?cpu.speed/1000+' MHz':'No data');
            })
            break;
        case command === '--homedir':
            console.log(os.homedir());
            break;
        case command === '--username':
            console.log(os.userInfo().username);
            break;
        case command === '--architecture':
            console.log(process.arch);
            break;
        default:
            console.log('Operation failed');
    }
};

export default osCommands;