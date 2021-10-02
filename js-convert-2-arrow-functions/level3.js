// function lvl3exercise1(){
//     // Create a "hello" and a "world", return the concatenation of the two

// }

let lvl3exercise1 = () => "hello" + " " + "world"

// function lvl3exercise2(){
//     // Create a "hello" and a 12, return the concatenation of the two

// }

let lvl3exercise2 = () => "hello" + "12"

// function lvl3exercise3(){
//     // Create a variable that equals 12 and convert it to a string. Return it.

// }

let lvl3exercise3 = () => {
    let num = 12
    return num.toString()
}

// function lvl3exercise4(){
//     // Create a "hello world!" string. Return the length of the string

// }

let lvl3exercise4 = () => {
    let string1 = "hello world!"
    return string1.length
}

// function lvl3exercise5(){
//     // Create a "hello world" string. Return the index of the word "world".

// }

// let lvl3exercise5 = () => {
//     let string1 = "hello world"
//     let arr = string1.split(" ")
//     return arr.indexOf("world")
// }

let lvl3exercise5 = () => {
    let string1 = "hello world"
    let arr = string1.split(" ")
    return arr.indexOf("world")
}

console.log(lvl3exercise1()); //hello world
console.log(lvl3exercise2()); //hello12
console.log(lvl3exercise3()); //"12"
console.log(lvl3exercise4()); //12
console.log(lvl3exercise5()); //1