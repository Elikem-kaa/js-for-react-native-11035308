function processArray(arr) {
    return arr.map(function(num) {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}
function formatArrayStrings(stringArr, numArr) {
    return stringArr.map(function(str, index) {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}


module.exports = {processArray, formatArrayStrings};