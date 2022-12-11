import fs from 'fs';
import path from 'path';

import getAbsPath from './getAbsPath.js';

const copyFile = async(pathFrom, pathTo, currentdir ) => {
    try {
        const absPathFrom = getAbsPath(pathFrom, currentdir);
        const fileName = absPathFrom.split('/').slice(-1)[0];
        const absPathTo = path.join(getAbsPath(pathTo, currentdir), fileName);
        
        const readStream = fs.createReadStream(absPathFrom);
        const writableStream = fs.createWriteStream(absPathTo);

        readStream.pipe(writableStream);
    } catch(err) {
        console.log('Operation Failed');
        console.log(err);
    }
};

export default copyFile;