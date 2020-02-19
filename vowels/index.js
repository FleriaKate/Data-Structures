//write a function that returns the number of vowels
//used in a string . Vowels are the characters 'a' ,'e' 
//'i' ,'o', and 'u'.
//---examples
//vowels('hi there')--> 3
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
} 

/*function vowels(str) {
    const read = str.search(/aeiou)/gi);
    return read;
}*///doesnt work because you used search-search nethod only the 1st instance

function vowels(str) {
    let count = 0;
    const check = ['a','e','i','o','u'];
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++
        }
    }
    return count;
    