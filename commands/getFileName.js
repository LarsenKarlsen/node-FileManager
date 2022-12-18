import path from 'path';

const getFileName = (absPath) => {
  return path.basename(absPath);
}

export default getFileName;