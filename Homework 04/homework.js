// HOMEWORK
// TASK 1 
// CREATE A PERSON constructor function that has : 

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    };
}

// Create an Animal constructor function that has: 

function Animal(name,age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log(`${this.name} is eating.`);
    };
    this.sleep = function(){
        console.log(`${this.name} is sleeping.`);
    };
}

//create a Cat constructor function that inherits from Animal and has

function Cat(name, age, color, ownerId){
    Object.call(this, name,age); // why is not working with (setPrototypeOf)
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function(){
        console.log(`The cat ${this.name} says MEOW`);
    };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// create an array of 5 people. Create two cats, both of them should have owners.

let people = [
    new Person(1, "Joshko", "Joshkoski", 25),
    new Person(2, "Mitre", "Mitreski", 30),
    new Person(3, "Jagoda", "Jagodoska", 35),
    new Person(4, "Ritko", "Mdfk", 40),
    new Person(5, "Repki", "Krleski", 28)
];

let cat1 = new Cat("Spicy", 2, "white", people[0].id);
let cat2 = new Cat("Zlatka", 4, "brown", people[2].id);


// Testing....

// console.log(people.map(person => person.getFullName()));
// console.log(`${cat1.name} belongs to ${people.find(p => p.id === cat1.ownerId).getFullName()}`);
// console.log(`${cat2.name} belongs to ${people.find(p => p.id === cat2.ownerId).getFullName()}`);

// cat1.meow();
// cat2.meow();
// cat1.eat();
// cat2.sleep();




// TASK 2 

// Create a method on the Cat prototype that returns the details about the owner, based on the owner id and by using the people array. If ownerId is null print that the cat does not have owner.

Cat.prototype.getOwnerDetails = function(people) {
    let owner = people.find(person => person.id === this.ownerId);
    if (owner) {
        console.log(owner.getFullName());
    } else {
        console.log(`The cat does not have an owner.`);
    }
};
cat2.getOwnerDetails(people);

//Create PersianCat and RagDollCat constructor functions that inherit from Cat.

function PersianCat (name, age, color, ownerId, eyeColor){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function(){
        console.log(`The cat ${name} has full fur!`)
    }
}

function RagDollCat (name, age, color, ownerId, weight, isFriendly){
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function(type){
        if(type){
            console.log(`The cat ${name} is friendly`);
            this.isFriendly = true;
        }else{
            console.log(`The cat ${name} is not friendly`);
        }
    }
}
let persianCat = new PersianCat("Mile", 2 , "black", 1, "Blue");
persianCat.furDescription(); // has full fur!

let ragdoll = new RagDollCat("Fluffy", 3, "White", 1, 4.5, false);
ragdoll.printPersonality(true); // Output: The cat Fluffy is friendly!


// na 31 linija ne sakase da mi e prepoznae kako funkcija so object.setprototypeOf(), pa izguglav
//za da upotrebam call i taka funkcionira ...