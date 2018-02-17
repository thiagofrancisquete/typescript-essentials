function greet():string {
    return 'hello ts'
}
function caller(){
    var msg = greet()
    console.log(msg)
}
caller()