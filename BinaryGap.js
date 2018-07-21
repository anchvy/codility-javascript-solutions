/**
 * <JAVASCRIPT> BinaryGap
 * 
 * 100% CORRECTNESS 
 * 
 * หาความยาวเลข 0 ระหว่างเลข 1 ของเลขฐาน 2 เช่น 1041 เลขฐาน 2 คือ  10000010001 ต้อง return 5  ออกมา
 */

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const base2Value = Number(N).toString(2)
    let binaryGap = 0
    let maxValue = 0

    for (let number of base2Value) {
        if (number === "0") {
            binaryGap++
        } else {
            maxValue = Math.max(maxValue, binaryGap)
            binaryGap = 0
        }
    }
    
    return maxValue
}