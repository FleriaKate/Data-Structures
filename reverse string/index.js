/*function reverse(str) {
    return str.split('').reverse().join('')
}*/


//function reverse(str) {
  //  let reversed = '';
    
    //for(let character of str) {
      //  reversed = character + reversed
    //}
    //return reversed;
//}//
function reverse(str)
   return str.split('').reduce((rev,char) => char + rev,'')
}
console.log(reverse('cathy'));//ji    
  ['c','a','t','h','y']
[1,2,3].reduce((a,b) => char + rev)

/*'cathy'
['c','a','t','h','y']
['y','h','t','a','c']
'yhtac'*/