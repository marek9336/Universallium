let stringsArray = ["a", "abc", "abcdef", "abcdefghijklmn", "xyz"];
let numbersArray = [93, 1, 32, 53, 12, 7, 13, 64, 56, 3];
let indexes = [0, 1, 2, 3, 4, 5];


/*****FOREACH*****/
//doesn't return anything!
// numbersArray.push(111);//prida prvek na konec pole
// numbersArray.unshift(777); //prida prvek na zacatek
// numbersArray.pop(); //odstrani posledni prvek
// numbersArray.shift(); //odstrani prvni prvek
// numbersArray.forEach( (number) => console.log(number+1) );


// function addOne(num) {
//     console.log(num + 1)
// };
// numbersArray.forEach(addOne);

// stringsArray.forEach((item)=> {
//     if (item.length > 5) {
//         console.log(item);
//     }
// });


/*****MAP*****/
//returns new array!

// let newArray = numbersArray.map( (number) => number +1);
// console.log(newArray);
// console.log(numbersArray);


/*****FILTER vs FIND*****/
//FILTER returns new array!
//FIND returns one vule (the first one)

// let newFilter = stringsArray.filter((item)=>item.length>3);
// let newFind = stringsArray.find((item)=>item.length>3);
// console.log(newFilter);
// console.log(newFind);


/*****SPLICE*****/
//returns array of deleted values AND changes the original array
//array.splice(index, howmanyToDelete, new1, ....., newX)

// use for adding elements
//indexes.splice(2, 0, 1.5, 1.6); //index 2, mazu 0, na idnex 2 vkladam 1.5 a za nej 1.6, cislo 2 se tak posouva az na 4. index
// console.log(indexes)

// use for deleting elements
// let newIndexes = indexes.splice(2, 4);
// console.log(indexes)
// console.log(newIndexes);

// use for replacing elements
// indexes.splice(2, 1, 2.5);
// console.log(indexes)