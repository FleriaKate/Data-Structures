/*function capitalize(str) {
    str = str.split('')
    for(var i = 0,x = str.length;x;i++){
        str[i] = str[i][0].toUpperCase() +str[i].substr(1)
    }
    return str.join('')
}
console.log(capitalize('a short sentence'));*/

function capitalize(str) {
    const words = []
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase()+word.slice(1))
    }
    return words.join(' ');
}
console.log(capitalize('a short story'));