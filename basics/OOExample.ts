class Greeting
{
    greet():void
    {
        console.log('hello type')
    }
}

var obj = new Greeting();
obj.greet();

/** Javascript
 * 
 * var Greeting =  @class  (function () {
 *  function Greeting() {
 *  }
 *  Greeting.prototype.greet = function () {
 *  console.log('hello type');
 *  };
 *  return Greeting;
 * }());
 * var obj = new Greeting();
 * obj.greet();
 * 
*/