function unique(arr) {
    let result = [];

    for (let obj of arr) {
        if (!result.find((item) => item._id.toString() == obj._id.toString() )) {
            result.push(obj);
        }
    }

    return result;
}

module.exports = unique;