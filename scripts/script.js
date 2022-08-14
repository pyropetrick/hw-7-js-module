// normal lvl
// task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach(item => console.log(item))
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
const positiveNumbers = numbers.filter(item => item >= 0)
console.log(positiveNumbers)

// task 4
const sumFib = fibonacci.reduce((item, prevItem) => item + prevItem)
console.log(sumFib)

// task 5
const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const firstEvenNum = numbers2.find(item => item % 2 === 0
)

console.log(firstEvenNum)

// advanced lvl

// task 1
const students = [
    {
        name: 'Andrew',
        salary: 1500,
        rate: 'A'
    },
    {
        name: 'Igor',
        salary: 2000,
        rate: 'B'
    },
    {
        name: 'John',
        salary: 1300,
        rate: 'C'
    },
    {
        name: 'Pavel',
        salary: 1000,
        rate: 'B'
    },
    {
        name: 'Peter',
        salary: 900,
        rate: 'D',
    },

];
function getCre() {
    return 0
}

const rateCredit = {
    'A': 12,
    'B': 9,
    'C': 6,
    'D': 0,
}

function Student ({salary, rate, name}) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;

    this.getName = () => this.name
    this.getCredit = () => this.salary * rateCredit[this.rate]

}

students.forEach(studentInfo => {
    student = new Student(studentInfo)
    console.log(`${student.getName()} : ${student.getCredit()}`)
})

// task 2
let comment = 'This website is for losers LOL'

function deleteTrollComments(str) {
    const re = /[aeuioAEUIO]/g;
    let strWithoutVowels = str.replace(re,'')
    console.log(strWithoutVowels)
}
deleteTrollComments(comment)

// task 4

let numbers3 = '3 1 2 6 5';

function highAndLow (str) {
    let arr = str.split(' ').map(item => +item).sort((a, b) => a - b ).map(item => item.toString())
    console.log(`${arr[arr.length - 1]} ${arr[0]}`)
}
highAndLow(numbers3)

// task 5

let word = 'Dermatoglyphics';

function isIsogram(str) {
    let setSize =  new Set(str.toLowerCase()).size;
    if (setSize === str.length) return true
    else return false
}
console.log(isIsogram(word))


// task 6

let inputWord = 'ABC';

function convertASCII(str) {
    let reSeven = /[7]/g
    let total1 = str.split('').map(word => word.charCodeAt()).join('');
    let total2 = +total1.replace(reSeven, '1');
    let total = total1 - total2;
    console.log(total)
}
convertASCII(inputWord)

