var num:number = 0
var count:number = 0
for(num = 0; num <= 20; num++){
    if (num % 2 == 0){
        continue
    }
    count ++
}
console.log(`quantidade de numeros pares entre 0 e 20 é ${count}`)