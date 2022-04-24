let arr = ["falafel", "sabich", "hummus", "aizza with extra",
    "pineapple "
]

console.log(arr.sort())
console.log(arr.sort().reverse())

let arrUpper = ["falafel", "Sabich", "Ahummus", "pizza with extra",
    "pineapple "
]

let newArr = arrUpper.sort((a, b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt());
console.log(newArr)
console.log(newArr.reverse())
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"
];
console.log(words.sort((a, b) => a.length - b.length));