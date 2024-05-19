const { formatArrayStrings, processArray } = require('./arrayManipulation');
let id = 1;

function createUserProfiles(names) {
    const modifiedNames = formatArrayStrings(names, processArray(names.map(Number)));
    return names.map(name => ({
        originalName: name,
        modifiedName: modifiedNames[names.indexOf(name)],
        id: id++
    }));
}

module.exports = createUserProfiles;