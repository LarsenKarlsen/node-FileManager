import os from 'os';


const osCommands = async (command) => {
    switch(true) {
        case command === '--EOL':
            console.log(JSON.stringify(os.EOL))
            break;
        case command === '--cpus':
            const cpusInfo = os.cpus();
            console.log(cpusInfo);
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