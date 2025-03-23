function checkAge(age){
  if ( age >= 18){
    return true;
  }else{
    return confirm('do you have Permission from your parents')
  }
} 
let age = prompt('how old are you ');
if ( checkAge (age)){
  alert('access granted');
}else{
  alert('access denied')
}