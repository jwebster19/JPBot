const fs = require("fs")

//Get all files within directory
const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(f=> f.endsWith(ending))
}

module.exports = {
    getFiles
}
