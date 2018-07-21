/**
 * <JAVASCRIPT> MissingInteger 
 * https://app.codility.com/demo/results/trainingPHUYK4-NYN/#
 * 
 * 100% CORRECTNESS
 * 100% PERFORMANCE
 * 
 * JAVASCRIPT SOLUTIONS
 * 
 * หาตัวเลขเรียงที่หายไป แต่ค่าต่ำสุดที่ return ออกต้อง >= 1 เท่านั้น
 */

function sortAscending(data1, data2) {
    return data1 -data2
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // remove duplicate value from array and sort ascending
    let uniqueValueArray = [...new Set(A)]
    uniqueValueArray.sort(sortAscending)
       
    // find max value and return 1 if max is <= 0
    let maxValue = uniqueValueArray[uniqueValueArray.length - 1]
    if (maxValue <= 0) return 1
       
    // find index of 1 because needed remove all sign number
    // but if no have 1 in array then return 1
    // if 1 is exist, get index and splice for find missing value that > 1
    let unsignValueIndex = uniqueValueArray.indexOf(1)
    if (unsignValueIndex < 0) {
        return 1
    } else {
        uniqueValueArray.splice(0, unsignValueIndex)
    }
    
    // find missing value by use cursor += 1 and check up with value in array
    // if equal then ++cursor, if not then return that number
    let cursor = 1
    for (let number of uniqueValueArray) {
        if (cursor !== number) {
            return cursor
        }
        cursor++
    }
    
    return cursor
}