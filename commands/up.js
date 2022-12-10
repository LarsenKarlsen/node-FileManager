const pathCompare = (path1, path2) => {
    return (path1.length === path2.length &&
    path1.every((element, index) => element === path2[index]));
}

export default function up(homedir, currentdir){
    let currentdirArr = currentdir.split('/');
    const homedirArr = homedir.split('/');

    if (pathCompare(currentdirArr, homedirArr)) {
        console.log("You are currently in home dir, and cant go up")
        return homedir
    } else {
        return currentdirArr.slice(0, -1).join('/')
    }
    
}