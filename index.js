// array functionality with PHP-like naming

function array_sum(arr) {
    return arr.reduce(function (acc, val) {
       return acc + val;
    }, 0);
}

function array_reverse(arr) {
    return arr.reverse();
}

function array_merge(mainArr, ...arr) {
    return mainArr.concat(...arr);
}

// Some sample usage

// import './index';
//
