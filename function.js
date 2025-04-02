// function checkAge(age){
//   if ( age >= 18){
//     return true;
//   }else{
//     return confirm('do you have Permission from your parents')
//   }
// } 
// let age = prompt('how old are you ');
// if ( checkAge (age)){
//   alert('access granted');
// }else{
//   alert('access denied')
// }
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i); // Log prime numbers to the console instead of alert
  }
}
 showPrimes(10)