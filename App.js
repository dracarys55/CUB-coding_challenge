const arr = [
  {
    firstName: 'Emily',
    lastName: 'Shih',
    customerID: '1043',
    note: 'patient',
    profession: 'student',
  },
  {
    firstName: 'Amy',
    lastName: 'Su',
    customerID: '1026',
    note: 'nothing',
    profession: 'product owner',
  },
  {
    firstName: 'Susan',
    lastName: '',
    customerID: '1022',
    note: 'She is an female',
    profession: 'systemAnalytics',
  },
  {
    firstName: 'Jack',
    lastName: 'Liu',
    customerID: '1023',
    note: 'He is a male',
    profession: 'engineer',
  },
  {
    firstName: 'Tim',
    lastName: 'goodheart',
    customerID: '1042',
    note: 'Heart is good',
    profession: 'freelancer',
  },
  {
    firstName: 'Jackson',
    lastName: 'Wu',
    customerID: '1033',
    note: 'old',
    profession: 'systemAnalytics',
  },
];
let keyWords = [
  'systemAnalytics',
  'engineer',
  'productOwner',
  'freelancer',
  'student',
];

//Q2:
let sortedArr = [];
for (let i = 0; i <= keyWords.length; i++) {
  arr.forEach((element) => {
    if (element.profession === keyWords[i]) {
      sortedArr.push(element);
    }
  });
}
console.log(sortedArr);

// const newArr = arr.sort((a,b)=>{
// const nameA = a.profession.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.profession.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// } )

// console.log(newArr)

// Q3:
let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];
let unique = items.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);
