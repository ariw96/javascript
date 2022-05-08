const obj = {
    name: 'ari',
    printName: function() {
        console.log(this.name)
    }
}
obj.printName();
const printName = obj.printName.bind(obj);
setTimeout(printName, 1000)