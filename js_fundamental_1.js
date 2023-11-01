// Variables
let firstName = 'Malinda'

// Variables name conventions
let jonas_malinda = 'JM'
let $function = 27

let person = 'jonas'
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

// console.log(myFirstJob)

// Data Type
let javascriptIsFun = true
// console.log(javascriptIsFun)
// console.log(typeof true)

javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)

let year
// console.log(year)
// console.log(typeof year)

year = 1991
// console.log(typeof year)

//////////////////////////////
// let, const and var
let age = 30
age = 31

const birthYear = 1997
// birthYear = 1998
// const job

var job = 'programmer'
job = 'teacher'

lastName = 'Iqbal'
// console.log(lastName)

hello_world = 'string'
// console.log(hello_world)

////////////////////////////////////////////////
// Basic operators
// Math operators
const now = 2023
const myAge = now - 1997
const sarahAge = now - 1998

// console.log(myAge ** 2, sarahAge / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Assignment operators
let x = 10 + 5
x += 10
x *= 4
x++
x--

// Comparison operators
// console.log(myAge > sarahAge) // >, <, >=, <=
// console.log(sarahAge >= 10)

const isFullAge = sarahAge >= 18
// console.log(isFullAge)

// console.log(now - 1991 > now - 2018)

// Operator precedence
let x1, y1
x = y = 25 - 10 - 5

// string and template literals
const firstNameJonas = 'Jonas'
const jobJonas = 'Teacher'
const birthYearJonas = 1991
const yearNow = 2023

const descriptionMe = `I am ${firstNameJonas},a ${
  yearNow - birthYearJonas
} years old ${jobJonas}`

// Taking decision: if/else statements
const agePerson = 15
if (agePerson >= 18) {
  console.log(`Person can start driving.`)
} else {
  const yearsLeft = 18 - agePerson
  console.log(`Person is too young , wait another ${yearsLeft} years`)
}

const birthYearPerson = 1997

// Type conversion and coercion

// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23)

console.log('********************')
// Truthy and falsy values
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if (money) {
  console.log(`Don't spend it all.`)
} else {
  console.log('You should get a job')
}

const height = 0
if (height) {
  console.log(`Yay ! Height is defined.`)
} else {
  console.log(`Height is undefined.`)
}

// Equality operators: == vs ===
const agePersonNew = '18'

if (agePersonNew === 18) console.log(`You get become an adult (strict)`)
if (agePersonNew == 18) console.log(`You just become an adult (lose)`)

const fav = 23
console.log(Number(fav))

if (fav === 23) {
  console.log(`Cool ! 23 is an amazing number`)
} else if (fav === 7) {
  console.log(`7 is also cool !`)
} else if (fav === 9) {
  console.log(`9 is also cool`)
} else {
  console.log(`Number is not 23 , 7 or 9`)
}

if (fav !== 23) console.log(`Why not 23 !`)

// Logical operators
const hasDrivingLicense = true
const hasGoodVision = true

console.log(hasDrivingLicense && hasGoodVision)
console.log(hasDrivingLicense || hasGoodVision)
console.log(!hasGoodVision)

const isTired = true

if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive.`)
} else {
  console.log(`Someone else should drive...`)
}

// The switch statement.
const day = 'monday'
switch (day) {
  case 'monday':
    console.log('Plan course structure')
    console.log('Go to coding meeting')
    break
  case 'tuesday':
    console.log('Prepare theories slides')
    break
  case 'wednesday':
  case 'thursday':
    console.log('write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'sunday':
  case 'saturday':
    console.log('Enjoy the weekend')
    break
  default:
    console.log('Not a valid day')
}

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger'
  console.log(str)
}

const me = 'Jonas'
console.log(`I am ${2023 - 1997} years old`)

// Conditional(ternary operator)
const ageMe = 23

age >= 18
  ? console.log(`I would like to drink wine!`)
  : console.log(`I would like to drink water`)

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

// Coding Challenge 1
// Coding Challenge 2
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / heightJohn ** 2

const markHigherBMI =
  BMIMark > BMIJohn
    ? `Mark's BMI is higher than John's!`
    : `John's BMI is higher than Mark's!`

console.log(markHigherBMI)

// Coding challenge 3
const dolphinsScore = (96 + 108 + 89) / 3
const koalasScore = (88 + 91 + 110) / 3

console.log(dolphinsScore)
console.log(koalasScore)

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Dolphins win the trophy`)
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log('Koalas win the trophy')
} else if (
  dolphinsScore === koalasScore &&
  dolphinsScore >= 100 &&
  koalasScore >= 100
) {
  console.log('Both win the trophy')
} else {
  console.log(`No one win the trophy`)
}
