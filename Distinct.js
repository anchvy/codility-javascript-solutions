/** 
 * <JAVASCRIPT> Distinct
 * https://app.codility.com/demo/results/training7WSFT8-449/#
 * 
 * 100% CORRECTNESS
 * 100% PERFORMANCE
 * 
 * JAVASCRIPT SOLUTIONS
 * 
 * ให้  array มาแล้วหาว่ามีค่าที่ต่างกันอยู่กี่ค่า ex. [1,2,1] return 2
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const uniqueArrayValue = [...new Set(A)]
    return uniqueArrayValue.length
}