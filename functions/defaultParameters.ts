function calculate(price:number, rate:number=0.50) {
    var discount = price * rate;
    console.log("Discount amount: ",discount)
}
calculate(1000);
calculate(1000,0.30);