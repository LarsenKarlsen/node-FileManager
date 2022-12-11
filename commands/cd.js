import path from 'path';
import fs from 'fs';

import getAbsPath from './getAbsPath.js';


const cd = async (pathTo, currentdir) => {
    let absPathTo = getAbsPath(pathTo, currentdir); 

    absPathTo = await fs.promises.stat(absPathTo)
    .then(async(stat)=>{
        if (stat.isDirectory()){
            return absPathTo;
        }
    })
    .catch((err)=>{
        console.log('Operation failed');
        console.log(err);
        return currentdir;
    })

    return absPathTo;
};

export default cd;