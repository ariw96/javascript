// Write two functions that use Promises that you can chain. 
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in 
// alphabetical order. If the array contains anything but strings, it should throw 
// an error.
// Call the functions once with an array of words and call it once with an array 
// that includes at least one item that is not a word. Print the resolve and reject 
// in a .then, .catch
function makeAllCaps(words) {
    return new Promise(function(resolve, reject) {
        if (words.every((word) => typeof word === 'string')) {
            resolve(words.map((word) => word.toUpperCase()))
        } else {
            reject(Error('No, the array you passed in contained an element that was not a string!'))
        }
    });
};

function sortWords(words) {
    return words.sort()
}
let array = ["zoo", 9, "wolf", 'beware']
makeAllCaps(array)
    .then((words) => sortWords(words))
    .then((value) => console.log(value))
    .catch((error) => console.log(error))