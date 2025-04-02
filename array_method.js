let a = ["HTML","CSS","JAVASCRIPT"];
let B = ["React","node.js"];

//concatenation both array

let concate = a.concat(B);
// console.log("concatenated array : " , concate);

// Array length
let lang = ["html","css","js","react"];
// console.log(lang.length);

//tostring method
 let s = [1,2,3,4,5];
 let x = s.toString();
//  console.log(typeof x);

//join method
let arr = [ "html","css","js","react"];
//  console.log(arr.join ('|'));

//reverse method
let r = [34,233,567,4];
//  console.log( "original array: " + r);
let new_arr = r.reverse();
// console.log(" new reverse array: " + new_arr);

// concat method

 let a1 = [11,12,13,];
 let a2 =[14,15,16];
 let a3 = [17,18,19];
 let arr1 = a1.concat(a2,a3);
//  console.log(arr1)

// flat method

const f = [['1','2'],['3','4','5',['6'],['7']]];
const f2 = f.flat(Infinity);
console.log(f2);

// push method
let p = [10,20,30,40,50];
p.push(60,70,80,90,100);
// console.log(p);

// unshift 
let u = [30,40,50];
u.unshift(10,20);
console.log(u);