/*var a,b,result;
a = 0;
b = 1;
result = b;{
    for( let = )
}*/
function fib(n) {
    const result = [0,1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1] ;
        const b = result [i - 2];
    result.push(a + b)

}

var data = result.map((data) =>{
    return data;
})

 console.log(data);
}
console.loh(fib(50))
