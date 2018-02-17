var global_num = 12 //variavel global

class Numbers {
    num_val = 13;  // variavel da classe
    static sval = 10; // static field
    storeNum():void {
        var local_num = 14 // variavel local
    }
}

console.log("global num: " +global_num)
console.log(Numbers.sval) // variavel statica
var obj = new Numbers();
console.log("Global num: " +obj.num_val)

/* Javascript

var global_num = 12; //variavel global

var Numbers =  @class  (function () {
    function Numbers() {
        this.num_val = 13; // variavel da classe
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // variavel local
        console.log(local_num);
    };
    Numbers.sval = 10; // static field
    return Numbers;
}());

console.log("global num: " + global_num);
console.log(Numbers.sval); // variavel statica
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
*/