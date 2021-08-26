# JS array functions with PHP syntax

## Functions available in this release (1.0.2):
* **array_sum(arr)** - returns the sum of array elements
* **array_reverse(arr)** - reverses the submitted array's order of elements
* **array_merge(arr1, arr2, ...)** - merges submitted arrays into one
* **array_chunk(arr, chunkSize)** - split the specified array into sub-arrays 

## Usage examples

    let php = require('php-array-functions');

    myArray = [1, 2, 3, 4, 5];

    sum = php.array_sum(myArray);

    console.log(sum);

    console.log(php.array_reverse(myArray));

    console.log(php.array_merge(myArray, [7,8,9], [-4, -7, -99]));

    console.log(php.array_chunk(myArray, 2));