import path from 'path';

const getAbsPath = (pathToFile, currentdir) => {
    let absPathTo;
    if (!path.isAbsolute(pathToFile)) {
        absPathTo = path.join(currentdir, pathToFile);
    } else {
        absPathTo = pathToFile;
    };

    return absPathTo;
}

export default getAbsPath;