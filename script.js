const personEnriki = {
    name: 'Enriki',
    age: 30,
    city: 'London',
    work: 'programmer',
    hobby: 'run in the morning',
    drink: 'juse',
};

const personSara = {
    name: 'Sara',
    age: 26,
    city: 'London',
    work: 'lawyer',
    hobby: 'watch tv, write an article',
};

const personAnn = {
    name: 'Ann',
    age: 4,
    city: 'London',
    hobby: 'draw',
};

const personTommy = {
    name: 'Tommy',
    age: 4,
    city: 'London',
};

const personJim = {
    name: 'Jim',
    age: 60,
    city: 'Manchester',
    work: 'retire',
    hobby: 'travel',
};

const personKelly = {
    name: 'Kelly',
    age: 60,
    city: 'Manchester',
    work: 'retire',
    hobby: 'travel',
};

const personEnriqueMother = {
    name: "Enrique's mother",
    age: 66,
    city: 'Liverpool',
};

const personNikolay = {
    name: 'Nikolay',
    age: 70,
    city: 'Siberia',
    work: 'security chief',
    hobby: 'violin',
    child: false,
};

personEnriki.marriedTo = personSara;
personEnriki.child = personAnn;
personEnriki.mother = personEnriqueMother;

personSara.marriedTo = personEnriki;
personSara.child = personAnn;
personSara.father = personJim;
personSara.mother = personKelly;

personAnn.father = personEnriki;
personAnn.mother = personSara;
personAnn.friend = personTommy;
personAnn.grandmother = `${personKelly.name},  ${personEnriqueMother.name}`;
personAnn.grandfather = personJim.name;

personTommy.friend = personAnn;

personJim.marriedTo = personKelly;
personJim.child = personSara;
personJim.granddaughter = personAnn;

personKelly.marriedTo = personJim;
personKelly.child = personSara;
personKelly.granddaughter = personAnn;
personEnriqueMother.marriedTo = personNikolay;
personEnriqueMother.child = personEnriki;
personEnriqueMother.granddaughter = personAnn;

personNikolay.marriedTo = personEnriqueMother;

console.log(personEnriki);
console.log(personSara);
console.log(personAnn);
console.log(personTommy);
console.log(personJim);
console.log(personKelly);
console.log(personEnriqueMother);
console.log(personNikolay);