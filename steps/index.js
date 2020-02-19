/*function steps(n,i = 1){
    if (i > n)
    return;
    console.log('#'.repeat(i) + ' '.repeat(n -i))
    steps (n,i+1);

}*/

function steps(n) {
    const step = ''
    for (i = 0; i < n;i ++) {
        console.log(step+= '#')
    }
    steps(3)
    }

