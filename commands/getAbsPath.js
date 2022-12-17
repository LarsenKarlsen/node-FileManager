import path from 'path';

const getAbsPath = (pathToFile, currentdir) => {
    let absPathTo;
    if (!path.isAbsolute(pathToFile)) {
        if(pathToFile.includes('./') || pathToFile.includes('../')) {
            absPathTo = path.resolve(currentdir, pathToFile);
        } else {
            absPathTo = path.join(currentdir, pathToFile);
        };
    } else {
        absPathTo = pathToFile;
    };

    return absPathTo;
}

export default getAbsPath;