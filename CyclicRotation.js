/**
 * <JAVASCRIPT> CyclicRotation
 * 
 * 100% CORRECTNESS 
 * 
 * ให้อาเรย์ กับจำนวนครั้งมา แล้วให้เอาตัวสุดท้ายของอาเรย์ที่ให้มาสลับไปไว้หน้าสุด ทำแบบนี้ไปเรื่อย ๆ จนครบครั้งที่ให้มา
 */

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)    
    if (A.length === 0) return []
    
    // check all array has same value or count === 0
    if ([...new Set(A)].length === 1 || K === 0) return A
    
    // unshift is insert value at first index array Array.unshift(1,2,...)
    // pop is slice 1 value at last index and get that value
    for (let count = 0; count < K; count++) {
        A.unshift(A.pop())
    }
    
    return A
}
