import crypto from 'crypto';
import fs from 'fs';
import getAbsPath from './getAbsPath.js';

const getHash = async(pathTo, currentdir) => {
    const absPathTo = getAbsPath(pathTo, currentdir);
    const fileContent = await fs.promises.readFile(absPathTo)
    .then((data)=>{
        return data;
    })
    .catch((err)=>{
        console.log('Operation Failed');
        console.log(err);
    })
    
    const hashSum = crypto.createHash('sha256');

    hashSum.update(fileContent)
    console.log(hashSum.digest('hex'))
}

export default getHash;