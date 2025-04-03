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
// console.log(f2);

// push method
let p = [10,20,30,40,50];
p.push(60,70,80,90,100);
// console.log(p);

// unshift 
let u = [30,40,50];
u.unshift(10,20);
// console.log(u);

// shift method
let s1 = [10,20,30,40,50];
s1.shift();
// console.log(s1);

// slice method
let s2 = [10,20,30,40,50];
let s3 = s2.slice(1,4);    
// console.log(s3);

// splice method
let s4 = [10,20,30,40,50];
s4.splice(1,3);
s4.splice(1,0,60,70,80);
// console.log(s4);

// some method
const m1 = [1,2,3,4,5];
let res = m1.some((val) => val < 5);
// console.log(res);

// importent 

// map
let f1 = [4,9,16,25];
let sub = f1.map(map1);
function map1(){
return f1.map( Math.sqrt);
}
// console.log(sub);

// reduce method
