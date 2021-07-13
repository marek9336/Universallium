/*DIFFERENCE LET and CONST*/

// let a = 5;
// a = 3;
// console.log(a);

//but following doesn't work
// const konstanta = 5;
// konstanta = 3;
// console.log(konstanta)

/*HOW TO CREATE AN OBJECT - WHAT WE KNOW ALREADY*/

// let arr2 = [];
// console.log(arr2)

// let arr1 = new Array();
// console.log(arr1);

/*CLASSES*/
/*Basic syntax*/

// class Company {
//
// }

// const unicorn = new Company();
// unicorn.name = "Unicorn a.s.";

// console.log(unicorn);

/*Constructor*/

// class Company {
//     constructor(name, headquarters) {
//         this.name = name;
//         this.headquarters = headquarters;
//     }
//     //this se zde odkazuje na aktualne vytvarenou instanci
// }

// const unicorn = new Company("Unicorn a.s.", "Praha");
// console.log(unicorn);
// console.log(unicorn.headquarters);

/*Methods*/
//no keyword 'function'

// class Company {
//   constructor(name, headquarters) {
//     this.name = name;
//     this.headquarters = headquarters;
//   }

//   getEmployeeCard(employeeName) {
//     console.log(`${employeeName} works at ${this.headquarters} for ${this.name}`);
//   }
// }

// const unicorn = new Company("Unicorn a.s.", "Praha");
// unicorn.getEmployeeCard("Franta Voprsalek");