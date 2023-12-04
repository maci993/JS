// Задача 1.
let books = [
   { title: "Book 1", author: "Author A", year: 2000 },
   { title: "Book 2", author: "Author B", year: 2010 },
   { title: "Book 3", author: "Author C", year: 2020 },
  ]

  books.forEach((book) => console.log(book))

  ///???
let findBook = books.filter((book) => book.year > 2000);
findBook.forEach((book) => console.log(book.name));
console.log(findBook)

//Задача 2.
//а.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
  }

  let additionalInfo = {
    email: "john@gmail.com",
    phone: "+55 839 7357",
    education: {
        degree: "Bachelor",
        major: "Duke University"
    }
  }

console.log(person, additionalInfo)

//б.
const user = {
    id: 123,
    username: "jsmith",
    fullName: { firstName: "John", lastName: "Smith" },
    contact: { email: "john@example.com", phone: "555-555-5555" },
    addresses: [
      {
        type: "home",
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      {
        type: "work",
        street: "456 Market Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
      },
    ],
  }
  let { username } = user;
  console.log(username);
  let {
    fullName: { firstName, lastName },
  } = user;
  console.log(firstName, lastName);
  let {
    contact: { email },
  }= user;
  console.log(email);

  //
  let {
    addresses: [
      { street: homeStreet, city: homeCity, state: homeState, zip: homeZip }
    ],
  } = user;

  let {
    addresses: [
      { street: workStreet, city: workCity, state: workState, zip: workZip }
    ],
  } = user;
  
  console.log(homeStreet, homeCity, homeState, homeZip);
  console.log(workStreet, workCity, workState, workZip);

//Задача 3.

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    ]

    //a.
const countriesWithLand = countries.filter((country) => country.includes('land')
)
console.log(countriesWithLand)
//б.
countries.forEach((element) => console.log(element.toUpperCase()))

//Задача 4.
let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
]

//а.
let popularityBiggerThanFour = zooAnimals.filter((animal) => animal.popularity > 4);
popularityBiggerThanFour.forEach((animals) => console.log(animals.name));

//б.
let elephants = zooAnimals.find((animal) => animal.name === "elephants");
let theOldestElephant = elephants.residents.reduce((oldest, current) => oldest.age > current.age ? oldest : current 
);
console.log(theOldestElephant.name);

//в.
let penguins = zooAnimals.find((animal)=> animal.name === "penguins");
console.log(penguins);
let femalePenguins = penguins.residents.filter((femaleAnimal) => femaleAnimal.sex === "female" && femaleAnimal.age < 10);
femalePenguins.forEach((penguin) => console.log(penguin.name));

//г.
//let zooNames = zooAnimals.reduce((longest, shortest) =>
//longest.name.length > shortest.name.length ? longest : shortest);
//let sumAge = longestName.residents.reduce((age, curr) => age + curr.age,0);

//console.log(longestName);
//console.log(sumAge);

//д.
let biggest = zooAnimals.reduce((big, small) => big.residents.length > small.residents.length ? big : small);
console.log(biggest);

let smallest = zooAnimals.reduce((small, big) => small.residents.lenght > small.residents.length ? big : small);
console.log(smallest);

let biggestSmallest = [
  ...smallest.residents.map((animal) => animal.name),
  ...biggest.residents.map((animal) => animal.name),
];
console.log(biggestSmallest);

//Задача 5.

//let checkGrade = 89; 
 //let grade  = checkGrade >=90 ? 'A'
 //: grade >= 80 ? "B"
 
 //: grade >=70 ? "C"
 
 //: grade >= 60 ? "D"
 
 //: grade <= 59 ? "F" :

//console.log(checkGrade)







