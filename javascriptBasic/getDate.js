function strDate() {
    let date = new Date();
    let arr = date.toString().split(" ");
    console.log(arr)
    console.log(date)
    console.log(date.toString())

    console.log(`Today is ${arr[0]} the ${arr[2]} of ${arr[1]}, ${date.getFullYear()}`);
}
strDate()