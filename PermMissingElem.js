/**
 * <JAVASCRIPT> PermMissingElem
 * https://app.codility.com/demo/results/trainingSZ6JJU-T8X/#
 * 
 * 100% CORRECTNESS 
 * 100% PERFORMANCE 
 * 
 * JAVASCRIPT SOLUTIONS
 * 
 * หาตัวเลขเรียงที่หายไป
 */

function sortAscending(data1, data2) {
    return data1- data2
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // sort for easiest to find missing number
    A.sort(sortAscending)
    
    // set start cursor with 1 cuz range [1,…,100000]
    // it means next cursor and next sorted value in array is 2
    let cursor = 1
    for (let number of A) {
        // but if is not 2 when next cycle its mean 2 is missing
        if (cursor !== number) {
            return cursor
        }
        
        cursor++
    }
    
    // return here when array empty
    // and all values in array is sort correctly and first is 1, it will return number that should be last value
    return cursor
}