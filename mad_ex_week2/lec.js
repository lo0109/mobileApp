// const str1 = 'abc';
// const str2 = "ab"
// const str3 = `abc`

// const name = 'tom'
// const age = 3
// const longstr =`my name is ${name}, my name is ${age}`
// console.log(longstr) 


// const myFun = (a,b) => {
//     return a+b
// } 
// const myFun2 = (a,b)=> a+b

// console.log(myFun(1,2))
// console.log(myFun2('a','b'))


// function callOnce(fn) {

// }

// const greetGenerator = (greeting) => (name) => `Good ${greeting}, ${name}.`;
// // const greetGenerator = (greeting) => {
// //     return (name) => `Good ${greeting}, ${name}.`;
// // }

// const morning = greetGenerator(morning('tom'));
// const afternnon = greetGenerator(afternoon('jer'));

// console.log(morning)
// console.log(afternnon)



// function total() {
//     let ret =0;
//     console.log(arguments);
//     for (const v of arguments) ret+=v;
//     return ret;
// }
// console.log(total(1,2,3,4))

// const total1 = (...arg) => {
//     let ret =0;
//     console.log(arg);
//     for (const v of arg) ret+=v;
//     return ret;
// }
// console.log(total1(1,2,3,4))


// const arr = [1,2,[3,4]]
// const arr2 = [, , ...arr]



// const arr = [1,2,3,4];
// // const arr2 = arr;
// const arr2 =[...arr]; //copy
// arr2.push(5);
// console.log(arr,arr2);


// let str = 'abc';
// str[0] = str[0].toUpperCase();
// console.log(str)


// const obj1 = {name:'tom', age: 12};
// // const obj2 ={...obj1, age :10}
// const obj2 ={age :10, ...obj1} //later overwrite the previous
// console.log(obj2)

// let x = 1.1111;
// console.log(parseFloat(x.toFixed(2)))
// console.log(0||1)
// console.log(undefined&&0)
// console.log(undefined??0)

str = 'abcdefg'
console.log(str[0].toUpperCase() + str.slice(1))