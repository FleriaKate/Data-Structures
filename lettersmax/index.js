

/*function maxChar(str){
    const charMap = {}
}*/
//var str = 'happiness';
//const char = {}

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
         } else {
      charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char]>max){
            max = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxChar(wamlambezzz));

//for (let data of str){
 //   if (char[data]) {
  //      char[data]++
    //} else {
      //  char[data] = 1
    //}
//}console.log(char)
