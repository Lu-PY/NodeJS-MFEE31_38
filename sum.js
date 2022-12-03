function sum(n) {
    let sum = 0;
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
    } else if (n < 0) {
        for(let i=0;i>=n;i--){
            sum+=i;
        }
    }
    return sum;
}
console.log(sum(1))
console.log(sum(2))
console.log(sum(3))
console.log(sum(5))
console.log(sum(7))
console.log(sum(9))
console.log(sum(10))
