function square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

}
const objAspuare = new square(1, 1, 1, 4);
square.prototype.isSquare = function() {
    if (this.a === this.b && this.b === this.c && this.c === this.d) {
        return true;
    } else {
        return false;
    }
}
console.log(objAspuare);
console.log(square.prototype.isSquare());