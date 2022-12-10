import path from 'path';
import fs from 'fs';


const cd = async (pathTo, currentdir) => {
    let absPathTo; 
    if (!path.isAbsolute(pathTo)) {
        absPathTo = path.join(currentdir, pathTo);
    } else {
        absPathTo = pathTo;
    };

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