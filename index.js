// array functionality with PHP-like naming and syntax

module.exports = function array_sum(arr) {

    return arr.reduce(function (acc, val) {
       return acc + val;
    }, 0);

}

module.exports.array_reverse = arr => arr.reverse();

module.exports = function array_merge(mainArr, ...arr) {

    return mainArr.concat(...arr);

}

module.exports.array_chunk = (arr, chunkSize) => {

    let chunks = [];
    let p = 0;

    for(let q = 0; q < arr.length; q = q + chunkSize) {
        chunks[p] = arr.slice(q, q + chunkSize);
        p++;
    }

    return chunks;
}
