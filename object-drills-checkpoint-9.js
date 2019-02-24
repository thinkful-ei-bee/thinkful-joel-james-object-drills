'use strict';
//https://courses.thinkful.com/ei-js-v1/checkpoint/9

// 1:
let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

// 2:
let derp = {
  foo: 'this',
  bar: 'that',
  fum: 'not this',
  quux: 'not this but that',
  spam: 'waffle',
};

// for (const prop in derp) {
//   console.log(`Property name: ${prop}, property value: ${derp[prop]}`);
// }

// 3:
let hobbitMeals = {
  meals: [
    'breakfast', 
    'second breakfast', 
    'elevenses', 
    'lunch', 
    'afternoon tea', 
    'dinner', 
    'supper'
  ]
};

//console.log(hobbitMeals.meals[3]);

// 4 / 5:

function createPerson(...attributes){
  const [ name, jobTitle ] = attributes;
  return {
    name,
    jobTitle,
  };
}
let people = [];
let names = [
  'Jazz Jackrabbit',
  'Duke Nukem',
  'Gordon Freeman',
];
let jobs = [
  'Sonic Immitator',
  'Bubble Gum Chewer',
  'Crowbar Expert',
];

for (let i = 0; i < 3; i++) {
  people.push(createPerson(names[i], jobs[i]));
}

people.map((people) => {
  if(people.name !== names[2]){
    people.boss = names[2];
  }
});

//console.log(people);
// people.forEach(person => {
//   let noBoss = `${person.jobTitle} ${person.name} doesn't report to anybody.`;
//   let hasBoss = `${person.jobTitle} ${person.name} reports to ${person.boss}`;
//   person.boss === undefined ? console.log(noBoss) : console.log(hasBoss);
// });

// 6: Redo of cracking the code

function decode(word, cipher){
  for (var key in cipher) {
    if (key === word[0]) {
      return word[cipher[key] - 1];
    }
    //return key === word[0] ? word[cipher[key] - 1] : ' ';
  }
  return ' ';
}

function decodeWords(input, cipher){
  let message = '';
  for (let i = 0; i < input.length; i++) {  
    message += decode(input[i], cipher);
  }
  return message;  
}

let input = 'craft block argon meter bells brown croon droop'.split(' ');
let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};
console.log(decodeWords(input, cipher));

// let obj = {
//   a: 'some value',
//   b: 'another thing'
// };
// let filtered = ['a'].filter(key => obj.hasOwnProperty(key));
// console.log(obj[filtered]);