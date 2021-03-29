const person1 = {
    name: 'Enriki',
    age: 30,
    city: 'London',
    work: 'programmer',
    hobby: 'run in the morning',
    drink: 'juse',
};

const person2 = {
    name: 'Sara',
    age: 26,
    city: 'London',
    work: 'lawyer',
    hobby: 'watch tv, write an article',
};

const person3 = {
    name: 'Ann',
    age: 4,
    city: 'London',
    hobby: 'draw',
};

const person4 = {
    name: 'Tommy',
    age: 4,
    city: 'London',
};

const person5 = {
    name: 'Jim',
    age: 60,
    city: 'Manchester',
    work: 'retire',
    hobby: 'travel',
};

const person6 = {
    name: 'Kelly',
    age: 60,
    city: 'Manchester',
    work: 'retire',
    hobby: 'travel',
};

const person7 = {
    name: "Enrique's mother",
    age: 66,
    city: 'Liverpool',
};

const person8 = {
    name: 'Nikolay',
    age: 70,
    city: 'Siberia',
    work: 'security chief',
    hobby: 'violin',
    child: false,
};

person1['married to'] = person2;
person1.child = person3;
person1.mother = person7;

person2['married to'] = person1.name;
person2.child = person3.name;
person2.father = person5.name;
person2.mother = person6.name;

person3.father = person1.name;
person3.mother = person2.name;
person3.friend = person4.name;
person3.grandmother = `${person6.name},  ${person7.name}`;
person3.grandfather = person5.name;

person4.friend = person3.name;

person5['married to'] = person6.name;
person5.child = person2.name;
person5.granddaughter = person3.name;

person6['married to'] = person5.name;
person6.child = person2.name;
person6.granddaughter = person3.name;
person7['married to'] = person8.name;
person7.child = person1.name;
person7.granddaughter = person3.name;

person8['married to'] = person7.name;

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);
console.log(person7);
console.log(person8);