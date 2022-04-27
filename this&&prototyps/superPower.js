const storm = {

    superPower: "curiosity",

}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}
const print = printSuperPower.bind(storm);
print();
console.log