// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);


// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         return 2037 - this.birthYear;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }

// };

// console.log(jonas.calcAge());

// const age = jonas.calcAge();
// console.log(age);

// // "jonas is a 46-year old teacher, and he has a drivers license"
// console.log(jonas.getSummary());

// for (let i = 0; i < jonas.friends.length; i++) {
//     console.log(jonas.friends[i]);
// }

// for (let i = 0; i < jonas.friends.length; i++) {
//     console.log(jonas['friends'][i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------Start exercise ${exercise}------`);
//     for (let rep = 1; rep <= 3; rep++) {
//         console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//     }
// }