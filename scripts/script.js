// normal lvl
// task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach((item) => console.log(item))
// function getNumb(item) {
//     return console.log(item);
// }
// fibonacci.forEach(getNumb)


// task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const usersInfo = users.map((item,i) => {
    i += 1;
    return `member ${i}: ${item}`;
})
console.log(usersInfo)

// task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter((item) => {
    return item >= 0
})
console.log(positiveNumbers)

// task 4
const sumFib = fibonacci.reduce((item, prevItem) => {
    return item + prevItem;
})
console.log(sumFib)

// task 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstEvenNum = numbers2.find((item) => {
   return item % 2 === 0
})

console.log(firstEvenNum)

