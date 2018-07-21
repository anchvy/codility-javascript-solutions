/** 
 * <JAVASCRIPT> LongestPassword
 * 
 * 100% CORRECTNESS
 * 
 * JAVASCRIPT SOLUTIONS
 * 
 * ให้ string มาให้แบ่งคำจาก space แล้วไปเช็คว่าคำที่ใช้ได้ คำไหนความยาวมากที่สุด 
 * โดยคำที่ใช้ได้คือต้อง มีเฉพาะ A-Za-z0-9 เท่านั้น แล้วจำนวนตัวเลขในคำนั้น ต้องเป็นเลขคี่ 
 * และจำนวนตัวอักษรในคำนั้นต้องเป็นเลขคู่ ถ้าไม่มีคำที่ใช้ได้เลยให้ return -1
 */ 

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // split string by ' ' to gat each password
    const passwords = S.split(' ')
    // filter valid password
    const validPasswords = passwords.filter(password => {
        // regex: ^ is start word with
        // regex: $ is end word with
        // {{regexPattern}}.test({{string to check}}) return true/false
		if (!(/^[A-Za-z0-9]+$/.test(password))) return false
        
        // find charactor match with digits 0-9 return matched array
        const digitsLength = (password.match(/\d/g) || []).length
        // find charactor match with A-Za-z return matched array
        const lettersLength = (password.match(/[A-Za-z]/g) || []).length
        // check condition
        return ( digitsLength % 2 !== 0 ) && ( lettersLength % 2 === 0 )
    })
    
    if (validPasswords.length === 0) return -1
    // find max length of valid password
    return Math.max.apply(null, validPasswords.map(password => password.length))
}