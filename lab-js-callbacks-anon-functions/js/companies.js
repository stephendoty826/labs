const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// 1. Write a for loop to print each number of the ages array
for(let i = 0; i < ages.length; i++){
  console.log(ages[i]);
}

// 2. Using a for loop, print each name of the company in the array
for(let i = 0; i < companies.length; i++){
  console.log(companies[i].name)
}

// 3. Using a forEach method, print each number in the ages
ages.forEach(age=>console.log(age))

// 4. Using a forEach method, print each object of the companies array
companies.forEach(company=>console.log(company.name))

//5. Map through the ages array and return a new ages array where 5 is added to each element.
let newAges = ages.map(age => age + 5)

console.log(newAges);

// 6. Map through the companies array and return a new companies array. For each company with a "Finance" category, change the end date to 2021
let newCompanies = companies.map(company => {
  let companyObj = {...company}
  if(companyObj.category == "Finance"){
    companyObj.end = 2021
  }
  return companyObj
})

console.log(companies);
console.log(newCompanies);

// 7. Filter all even numbers in the ages array
let evenAges = ages.filter(age => age % 2 == 0)

console.log(evenAges);

// 8. Filter out all ages greater than 35
let youngAges = ages.filter(age => age <= 35)

console.log(youngAges);

// 9. Filter out all companies with a start date that is greater than 1990

let oldCompanies = companies.filter(companyObj => companyObj.start <= 1990)

console.log(oldCompanies);

// 10. Is there at least one value in the ages array that is equal to 21?
let is21 = ages.some(age => age == 21)

console.log(is21)

// 11. Are there values in the ages array that are less than 14?
let lessThan14 = ages.some(age => age < 14)

console.log(lessThan14);

// 12. Are there companies in the company list that started prior to 1990?
let oldCompanies = companies.some(companyObj => companyObj.start < 1990)

console.log(oldCompanies);


