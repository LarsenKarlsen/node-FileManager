import fs from 'fs';
import path from 'path';

import getFileName from './getFileName.js'

const fileInfo = async (pathToFile) => {
    const info = {};

    const fileStats = await fs.promises.stat(pathToFile);
    info['Name'] = getFileName(pathToFile);
    info['Type'] = fileStats.isFile()? 'file' : 'directory';
    info['Size'] = `${fileStats.size/1000 } kb`;
    return info;
};

const ls = async(currentdir) => {
    await fs.promises.readdir(currentdir)
    .then(async (files)=>{
        const filesArr = []
        for (const file of files) {
            const filePath = path.join(currentdir, file);
            filesArr.push(await fileInfo(filePath));
        };
        console.table(filesArr)
    })
    .catch((err)=>{
        console.log('Operation failed')
        console.log(err)
    })
};

export default ls;