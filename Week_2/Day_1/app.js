const anArray = [1, 2, 3, 4];

const person = {
    name: "Luca",
    job: "technical writer",
    age: 31,
    from: "Belgium",
    isBald: false,
    hobbies: ['writing', 'running', 'coding'],
    isHealthy: undefined,
    hasPreviousCareer: true
};

const personTwo = {
    name: "Chad",
    job: "Product manager",
    age: 28,
    from: "England",
    isBald: true,
    hobbies: ['painting', 'cooking', 'coding'],
    isHealthy: undefined,
    hasPreviousCareer: false
};

personTwo.isBald = false;
console.log("My name is", person.name);

// access key inside an object:
// using dot notation
// the other:

const baldnessCheck = "isBald";
console.log(person[baldnessCheck]);
console.log(person["isBald"]);

// loop over object, use for in loop

for (let key in person) {
    console.log(key)
}

for (let key in person) {
    console.log(person[key]);
}

// person[key] will change with the loop, person.key will only look for the literal key "key"

const bookStaff = [
    {
        name: "Luca",
        job: "technical writer",
        age: 31,
        from: "Belgium",
        isBald: false,
        hobbies: ['writing', 'running', 'coding'],
        isHealthy: undefined,
        hasPreviousCareer: true
    },
    {
        name: "Chad",
        job: "Product manager",
        age: 28,
        from: "England",
        isBald: true,
        hobbies: ['painting', 'cooking', 'coding'],
        isHealthy: undefined,
        hasPreviousCareer: false
    }

]

console.log(bookStaff[1].hobbies);
console.log(bookStaff[1].isBald.toString().toUpperCase());

// Cannot read property 'toString' of null (or undefined)
// Above will be a very common error

const student1 = {
    name: "John",
    job: "Student",
    ageAccordingToGoogle: 18,
    age: 37,
    from: "DR",
    isBald: false,
    hobbies: ["music", "bouldering", "comics"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student2 = {
    name: "Brittney",
    job: "Tech Specialist",
    ageAccordingToGoogle: 29,
    from: "US",
    age: 29,
    isBald: "truthy",
    hobbies: ["volleyball", "surfing", "snowboarding"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student3 = {
    name: "Tadej",
    from: "Eslovenia",
    job: "Product Specialist",
    ageAccordingToGoogle: 20,
    age: 32,
    isBald: false,
    hobbies: ["surfing", "sailing"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student4 = {
    name: "Luca",
    from: "Belgium",
    job: "Technical Writer",
    ageAccordingToGoogle: 16,
    age: 31,
    isBald: false,
    hobbies: ["writing", "running", "bouldering"],
    isHealthy: true,
    hasPreviousCareer: true,
  };



  const studentArr = [student1, student2, student3, student4];

  function printAllHobbies(arr) {
    let allHobbies = [];
    for (let student of arr) {
        for (let hobby of student.hobbies) {
            allHobbies.push(hobby);
        }
    }
    return allHobbies;
  }
  
  console.log(printAllHobbies(studentArr));

  // for in loop used for objects, for keys
